import React from "react";
import Helmet from "react-helmet";
import { CodeBlock } from "react-code-blocks";
import "./MyZShellSetup.css";

function MyZShellSetup() {
    return (
        <section className="my-zshell-setup">
            <Helmet>
                <title>My Z Shell Setup</title>
            </Helmet>

            <div className="heading">
                My Z Shell Setup
            </div>

            <div className="content">
                <p>
                    Just like all new Apple computers come with Z Shell as their default shell program,
                    my default shell is also Z Shell.
                </p>

                <p>
                    I like having a link to the documentation at the start of my <code>.zshrc</code> file.
                </p>
                <CodeBlock
                    text={`# The Z Shell Manual: https://zsh.sourceforge.io/Doc/Release/`}
                    language={"bash"}
                    showLineNumbers={false}
                    wrapLines
                />

                <p>
                    The following line helps me with auto-completion. <code>compinit</code> initializes completion for the
                    current session.
                </p>
                <CodeBlock
                    text={`autoload -Uz compinit && compinit`}
                    language={"bash"}
                    showLineNumbers={false}
                    wrapLines
                />

                <p>
                    Since I use homebrew to install packages, I need to add the homebrew <code>bin</code> directory to my path.
                </p>
                <CodeBlock
                    text={`export PATH="/opt/homebrew/bin:$PATH"`}
                    language={"bash"}
                    showLineNumbers={false}
                    wrapLines
                />

                <p>
                    I also like to have colors in my terminal. The next 2 lines enable and load colors.
                </p>
                <CodeBlock
                    text={`export CLICOLOR=1
autoload -U colors && colors`}
                    language={"bash"}
                    showLineNumbers={false}
                    wrapLines
                />

                <p>
                    I always like my prompt to be green, have my username, the machine name,
                    and just the last piece from my current directory.
                </p>
                <CodeBlock
                    text={`PS1="%{$fg[green]%}%n@%m/%1d $ %{$reset_color%}% "`}
                    language={"bash"}
                    showLineNumbers={false}
                    wrapLines
                />

                <p>
                    And then of course some aliases that I like to have.
                </p>
                <p>
                    The <code>p</code> option in the <code>ll</code> alias stands for shows a <code>/</code> with
                    each directory. Since I am slightly red-blue colorblind, the <code>/</code> helps me distinguish between
                    files and directories much better than if I was using colors.
                </p>
                <CodeBlock
                    text={`alias ll="ls -alihp"
alias rm="rm -i"`}
                    language={"bash"}
                    showLineNumbers={false}
                    wrapLines
                />

                <p>
                    Here's my entire <code>.zshrc</code> file:
                </p>
                <CodeBlock
                    text={
                        `# The Z Shell Manual: https://zsh.sourceforge.io/Doc/Release/

autoload -Uz compinit && compinit

export PATH="/opt/homebrew/bin:$PATH"

export CLICOLOR=1
autoload -U colors && colors

PS1="%{$fg[green]%}%n@%m/%1d $ %{$reset_color%}% "

alias ll="ls -alihp"
alias rm="rm -i"

`
                    }
                    language={"bash"}
                    showLineNumbers={true}
                    wrapLines
                />

            </div>
        </section>
    );
}

export default MyZShellSetup;