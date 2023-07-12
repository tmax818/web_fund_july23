# day 3

## Always isSunny

```js
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

```

|variable|value|
|---|---|
|isSunny||
|temperature|45|
|isRaining|false|
|whatToBring|"I should bring: sunglasses, a coat, and a smile!"|

```bash
I should bring: sunglasses, a coat, and a smile!
```

## prepare for downcount

```js
for(var i=10; i>0; i--) {
  if(i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}
    
console.log("liftoff!");

```

|variable|value|
|---|---|
|i||

```bash

```