import React, { Component } from "react";
import {Section1 } from "./components"
import "./App.css";

class App extends Component {
  
    render() {
        return (
            <div>
                <main>
                    <div className="ctn-main">
                        <Section1 />
                    </div>
                </main>
            </div>
            )
      }
}

export default App;
