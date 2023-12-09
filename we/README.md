oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g we
$ we COMMAND
running command...
$ we (--version)
we/0.0.0 darwin-x64 node-v18.18.2
$ we --help [COMMAND]
USAGE
  $ we COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`we hello PERSON`](#we-hello-person)
* [`we hello world`](#we-hello-world)
* [`we help [COMMANDS]`](#we-help-commands)
* [`we plugins`](#we-plugins)
* [`we plugins:install PLUGIN...`](#we-pluginsinstall-plugin)
* [`we plugins:inspect PLUGIN...`](#we-pluginsinspect-plugin)
* [`we plugins:install PLUGIN...`](#we-pluginsinstall-plugin-1)
* [`we plugins:link PLUGIN`](#we-pluginslink-plugin)
* [`we plugins:uninstall PLUGIN...`](#we-pluginsuninstall-plugin)
* [`we plugins reset`](#we-plugins-reset)
* [`we plugins:uninstall PLUGIN...`](#we-pluginsuninstall-plugin-1)
* [`we plugins:uninstall PLUGIN...`](#we-pluginsuninstall-plugin-2)
* [`we plugins update`](#we-plugins-update)

## `we hello PERSON`

Say hello

```
USAGE
  $ we hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/sudhir4ev/we/blob/v0.0.0/src/commands/hello/index.ts)_

## `we hello world`

Say hello world

```
USAGE
  $ we hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ we hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/sudhir4ev/we/blob/v0.0.0/src/commands/hello/world.ts)_

## `we help [COMMANDS]`

Display help for we.

```
USAGE
  $ we help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for we.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.7/src/commands/help.ts)_

## `we plugins`

List installed plugins.

```
USAGE
  $ we plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ we plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/index.ts)_

## `we plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ we plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ we plugins add

EXAMPLES
  $ we plugins add myplugin 

  $ we plugins add https://github.com/someuser/someplugin

  $ we plugins add someuser/someplugin
```

## `we plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ we plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ we plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/inspect.ts)_

## `we plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ we plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ we plugins add

EXAMPLES
  $ we plugins install myplugin 

  $ we plugins install https://github.com/someuser/someplugin

  $ we plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/install.ts)_

## `we plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ we plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ we plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/link.ts)_

## `we plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ we plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ we plugins unlink
  $ we plugins remove

EXAMPLES
  $ we plugins remove myplugin
```

## `we plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ we plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/reset.ts)_

## `we plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ we plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ we plugins unlink
  $ we plugins remove

EXAMPLES
  $ we plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/uninstall.ts)_

## `we plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ we plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ we plugins unlink
  $ we plugins remove

EXAMPLES
  $ we plugins unlink myplugin
```

## `we plugins update`

Update installed plugins.

```
USAGE
  $ we plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/update.ts)_
<!-- commandsstop -->
