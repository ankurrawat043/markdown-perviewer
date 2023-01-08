import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";

import ReactMarkdown from "react-markdown";

function Main() {
  const [markdown, setMarkdown] = useState("");

  function updateMarkdown(event) {
    let val = event.target.value;
    setMarkdown(val);
    console.log(markdown);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "200px" }}
              value={markdown}
              onChange={updateMarkdown}
            ></textarea>
            <label for="floatingTextarea2">Markdown Input</label>
          </div>
        </div>

        <div className="text-center my-5">
          <h4>
            <Badge className="text-align-center" variant="secondary">
              Preview
            </Badge>
          </h4>
        </div>
        <ReactMarkdown children={markdown}></ReactMarkdown>
      </div>
    </div>
  );
}

export default Main;
