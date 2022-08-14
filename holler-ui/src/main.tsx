import React from "react";
import { createRoot } from "react-dom/client";
import { AddUserProps, CardListProps, CardProps } from "./contracts/props";
import { AddUserState } from "./contracts/states";
import { getName, getTauriVersion, getVersion } from "@tauri-apps/api/app";
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";
import { fetch } from "@tauri-apps/api/http";
import { invoke } from "@tauri-apps/api/tauri";

// Test API by logging a custom message at statup
invoke("test_fetch").then(
  (response: string) =>
    (document.getElementById("app_content")!.innerHTML = response)
);

/**
 * React APP
 */
class Card extends React.Component<CardProps> {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class CardList extends React.Component<CardListProps> {
  render() {
    return (
      <div>
        {this.props.profiles.map((profile) => (
          <Card key={profile.id} {...profile} />
        ))}
      </div>
    );
  }
}

class AddUser extends React.Component<AddUserProps, AddUserState> {
  // Attributes
  private inputRef: React.RefObject<any>;

  // Methods
  private appenderFn(data) {
    this.setState((prev) => {
      prev.testData!.push(data);
      return prev;
    });
  }
  private handleUser = async (event) => {
    event.preventDefault();
    let uname = this.state.username;
    try {
      var response = await fetch(`https://api.github.com/users/${uname}`, {
        method: "GET",
        timeout: 30,
      });

      if (response.ok) {
        this.props.onNewCard(this.appenderFn, response.data);
      } else {
        if (response.status == 404) {
          let permissionGranted = await isPermissionGranted();
          if (!permissionGranted) {
            const permission = await requestPermission();
            permissionGranted = permission === "granted";
          }
          if (permissionGranted) {
            sendNotification({
              title: "Not Found",
              body: `User "${uname}" not found`,
            });
          }
        }
      }
    } catch (ex) {
      throw ex;
    }
  };
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      username: "",
      testData: [],
    };
  }

  render() {
    return (
      <form onSubmit={this.handleUser}>
        <input
          type="text"
          ref={this.inputRef}
          value={this.state.username}
          onChange={(event) => this.setState({ username: event.target.value })}
          placeholder="Enter a valid Github Username"
          required
        />
        <button type="submit">Add Card</button>
      </form>
    );
  }
}

class App extends React.Component {
  // Attributs
  public state = {
    testData: [],
    otherVal: "xyz",
  };
  // Mehods
  public handleNewCard = (appenderFn, data) => {
    // this.setState((prev) => prev.testData.push(data));

    appenderFn.call(this, data);
  };
  constructor(props: {} | Readonly<{}>) {
    super(props);

    // demo tauri apis
    getName().then((name) => console.log("appName - ", name));
    getTauriVersion().then((ver) => console.log("Tauri Version - ", ver));
    getVersion().then((appVer) => console.log("App Version - ", appVer));
  }
  render() {
    return (
      <>
        <h3>Github Cards</h3>
        <AddUser onNewCard={this.handleNewCard} />
        <div>
          <CardList profiles={this.state.testData} />
        </div>
      </>
    );
  }
}
/***/
const container = document.getElementById("app_content");
const root = createRoot(container!);
root.render(<App />);
