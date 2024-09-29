function convertToCm() {
    const input = document.getElementById('chinese-feet-inches').value;
    const match = input.match(/(\d+)尺(\d+)寸/);
    if (match) {
        const feet = parseInt(match[1], 10); // 尺
        const inches = parseInt(match[2], 10); // 寸
        const cm = (feet * 100 / 3 + inches * 100 / 30).toFixed(2); // 转换为厘米
        document.getElementById('cm-result').value = cm + ' cm';
    } else {
        alert('请输入正确的格式，例如：1尺2寸');
    }
}

function convertFromCm() {
    const cm = parseFloat(document.getElementById('cm-input').value);
    const feet = Math.floor(cm * 3 / 100); // 计算尺
    const inches = Math.floor((cm * 3 / 100 - feet) * 10); // 计算寸
    document.getElementById('chinese-result').value = feet + '尺' + inches + '寸';
}
