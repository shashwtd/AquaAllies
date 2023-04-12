function MediaWidth(size: number) {
    var media = window.matchMedia("(max-width: " + size + "px)");
    return media.matches;
}

function MediaHeight(size: number) {
    var media = window.matchMedia("(max-height: " + size + "px)");
    return media.matches;
}

function MediaOrientation(orientation: string) {
    var media = window.matchMedia("(orientation: " + orientation + ")");
    return media.matches;
}


export { MediaWidth, MediaHeight, MediaOrientation}