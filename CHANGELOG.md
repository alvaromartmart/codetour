## v0.0.18 (04/02/2020)

- Updated the VS Code version dependency to `1.40.0` (instead of `1.42.0`).
- Removed the dependency on the built-in Git extension, to ensure that recording/playback is more reliable.

## v0.0.17 (03/31/2020)

- Introduced "tour markers", which display a gutter icon next to lines of code which are associated with a step in a code tour.

## v0.0.16 (03/30/2020)

- Updated the `CodeTour` tree to display the currently active tour, regardless how it was started (e.g. you open a tour file).

## v0.0.15 (03/29/2020)

- Updated the `CodeTour` tree to only display if the currently open workspace has any tours, or if the user is currently taking a tour. That way, it isn't obtrusive to users that aren't currently using it.
- Updated the `CodeTour: Refresh Tours` command to only show up when the currently opened workspace has any tours.

## v0.0.14 (03/26/2020)

- Added the `Export Tour` command to the `CodeTour` tree, which allows exporting a recorded tour that embeds the file contents needed to play it back
- Added the ability to open a code tour file, either via the `CodeTour: Open Tour File...` command or by clicking the `Open Tour File...` button in the title bar of the `CodeTour` view
- Added support for tour steps to omit a line number, which results in the step description being displayed at the bottom of the associated file

## v0.0.13 (03/23/2020)

- Exposed an experimental API for other extensions to record/playback tours. For an example, see the [GistPad](https://aka.ms/gistpad) extension, which now allows you to create tours associated with interactive web playgrounds

## v0.0.12 (03/21/2020)

- Added a new `Edit Step` command to the `CodeTour` tree, which allows you to start editing a tour at a specific step
- Updated the `CodeTour` tree to only show the move step up/down commands while you're actively recording that step

## v0.0.11 (03/16/2020)

- Updated the `CodeTour` tree to auto-select tree node that is associated with the currently viewing tour step
- Text highlights can now be edited when editing a tour code
- Added support for collapsing all nodes in the `CodeTour` tree
- Added a prompt when trying to record a tour, using a title that is already in use by an existing tour

## v0.0.10 (03/16/2020)

- Introduced support for step titles, which allow defining friendly names for a tour's steps in the `CodeTour` tree
- Exposed an extension API, so that other VS Code extensions (e.g. [GistPad](https://aka.ms/gistpad)) can start and end tours that they manage
- Added the `CodeTour: Edit Tour` command, that allows you to edit the tour you're currently playing.

## v0.0.9 (03/15/2020)

- Added the ability to record a text selection as part of a step

  ![Selection](https://user-images.githubusercontent.com/116461/76705627-b96cc280-669e-11ea-982a-d754c4f001aa.gif)

## v0.0.8 (03/14/2020)

- Added the ability to associate a tour with a specific Git tag and/or commit, in order to enable it to be resilient to code changes
- Updated the tour recorder so that tours are automatically saved upon creation, and on each step/change

## v0.0.7 (03/14/2020)

- Added the `Edit Tour` command to tour nodes in the `CodeTour` tree, in order to allow editing existing tours
- Added the `Move Up` and `Move Down` commands to tour step nodes in the `CodeTour` tree, in order to allow re-arranging steps in a tour
- Added the `Delete Step` command to tour step nodes in the `CodeTour` tree
- Added the ability to insert a step after the current step, as opposed to always at the end of the tour
- Updated the workspace tour notification to display when any tours are available, not just a "main tour"

## v0.0.6 (03/13/2020)

- Added the `'Resume Tour`, `End Tour`, `Change Title`, `Change Description` and `Delete Tour` commands to the `Code Tours` tree view to enable easily managing existing tours
- Added the `Code Tour: End Tour` command to the command palette

## v0.0.5 (03/09/2020)

- Added an icon to the `Code Tours` tree view which indicates the currently active tour
- Added support for creating/replaying tours when connected to a remote environment (thanks @alefragnani!)

## v0.0.4 (03/09/2020)

- Added the save/end tour commands to the `Code Tours` tree view
- The tour file name is now auto-generated based on the specified title

## v0.0.3 (03/08/2020)

- Fixed a bug where recorded tours didn't always save properly on Windows

## v0.0.2 (03/08/2020)

- Added keyboard shortcuts for navigating an active code tour
- Changed the `Code Tours` view to always display, even if the current workspace doesn't have any tours. That way, there's a simple entry point for recording new tours

## v0.0.1 (03/08/2020)

- Initial release 🎉
