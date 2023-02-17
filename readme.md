# Codewars.js (One Line)

## 嘗試每道題目都用一行解
如果只有一個函式的話，那就是直接 return 一行。  
但如果有多個函式的話，我想我會把他們整合進同一個類別，然後把對照表拆出來。  
（儘可能讓各個函式只留有關鍵邏輯）

**這不是單純把換行拿掉而已。**

### 範例： if-else

```js
if(statement) {
    A
} else {
    B
}
```

將會替換成

```js
statement ? A : B
```

但也不是每個東西都能替換，例如：

### 範例： while / for

```js
while(statement) {
    // Line 1
    // Line 2
}
```

只要範圍內超過一行就無法使用 while，同樣的，for 也是如此。  
（至少我目前仍不知道怎麽做，也許以後會發現其實可以？）

不過不代表這樣就不能做，一樣有替代方案：

```js
f = x => (Line1, Line2), statement && f(x);
```

### 其中可能還會穿插一些 Code Golf 的技巧

只是用到一些比較好用的而已，不會全部都用，畢竟目的不同。

例如：

```js
// number.toString()
"" + number;

// parseInt(string)
string - 0;

// Math.floor(float)
~~float;

// char == char.toUpperCase()
char < {} 
```

####


## 搞這麼複雜是為了什麼？

沒為了什麼，純粹好玩。  
不知道可以維持到多少 kyu？