# ajinkyaindulkar.github.io

A collection of my notes and blog articles.


## Setup Logs

-   Add `hugo` project scaffold: 

    ```
    hugo new site . --force
    ```

-  Initialise project as `go` module:

    ```
    hugo mod init github.com/AjinkyaIndulkar/ajinkyaindulkar.github.io
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
    hugo new about.md
    ```

-   Create new content (for posts/notes):

    ```
    hugo new <subpage/page-name.md>
    ```

-   Test server locally:

    ```
    hugo server
    ```
