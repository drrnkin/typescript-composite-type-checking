
// This function isn't called.  It's just to show that a breaking type change is
// not detected in composite mode for a child project.
// The bug has nothing to do with jQuery!  Just an example.  Apparently any breaking
// change in an imported project isn't detected.
export function typeCheckingExample() {
    console.log("jQuery.Tween", jQuery.Tween); // Tween doesn't exist in jQuery 2.x, but exists in 3.x
}

export function child() {
    console.log("This is child.ts");
}
