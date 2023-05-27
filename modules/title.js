function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / SkullBomber v1.0 - Skull";
    } else {
        process.stdout.write('\x1b]2;' + x + " / SkullBomber v1.0 - Skull" + '\x1b\x5c');
    }
}

module.exports = console_title;
