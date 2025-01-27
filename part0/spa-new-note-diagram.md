::: mermaid
sequenceDiagram
  participant browser
  participant server

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  Note right of browser: The user submits the HTML form (via AJAX) with the new note.
  activate server
  server-->>browser: { "message": "note created" }
  Note left of server: The server returns a JSON object with the response.
  deactivate server

  Note right of browser: The browser executes the callback function that renders the notes.
:::