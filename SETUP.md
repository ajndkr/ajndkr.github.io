# Setup Logs

-   Add `hugo` project scaffold: 

    ```
    hugo new site . --force
    ```

-  Initialise project as `go` module:

    ```
    hugo mod init github.com/ajndkr/ajndkr.github.io
    ```

-   Add `risotto` theme as git submodule:

    ```
    git submodule add https://github.com/joeroe/risotto.git themes/risotto
    ```

    (Future: Add theme to `go.mod`)

-   Update `config.toml`

-   Create homepage and aboutpage content:

    ```
    hugo new _index.md
    hugo new whoami.md
    ```

-   Create new content (for posts/notes):

    ```
    hugo new <subpage/page-name.md>
    ```

-   Create favicon:

    - create SVG icon
    - use https://realfavicongenerator.net/ to generate favicon files and dump inside `static/`
    - create `layouts/partials/favicons.html`

## Test server Locally:

```
hugo server
```
