## how to swap variables

```js
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);

```
|variable|value|
|---|---|
|fruit1||
|fruit2||

```js
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

```
|variable|value|
|---|---|
|temp||
|fruit1||
|fruit2||

## `while` loops

```js

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

|variable|value|
|---|---|
|start|0,2,4,6|
|end|12,10,8,6|
```

```bash
start: 0, end: 12
start: 2, end: 10
start: 4, end: 8
```