// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(sec) {
    return h = (~~(sec / 3600)).toString().padStart(2, "0"), m = (~~((sec - h * 3600) / 60)).toString().padStart(2, "0"), s = (sec % 60).toString().padStart(2, "0"), `${h}:${m}:${s}`;
}