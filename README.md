## Example of missing a breaking type change.

### Steps tp reproduce:
* In both the main and child folders, run "yarn" to install each.
* In the main folder, run "yarn build" to build both projects in composite mode.
* In the child folder, run "yarn oldjquery" to change type info.
* In the main folder, run "yarn build" again and note that it doesn't detect the breaking change.

jQuery is just an example of a public package with a breaking change between versions.  The bug applies
to any such package.  It doesn't matter that we are downgrading in this case.

Note that "yarn tsc" in the child package will detect the breaking change, but the change is not detected
when built with composite mode.