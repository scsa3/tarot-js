function getMajor() {
    let majors = [];
    for (const i of Array(22).keys()) {
        let zeroFilled = ('00' + i).slice(-2);
        let name = 'maj' + zeroFilled + '.jpg';
        majors.push(name);
    }
    return majors;
}
