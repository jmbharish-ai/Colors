import {Fraction} from './Fraction.js';

export class Colors{
    static color(luminance, redGreen, redGreenValue, blueYellow, blueYellowValue){
        var RGB_red;
        var RGB_green;
        var RGB_blue;

        if(redGreen=="red"&&blueYellow=="blue"){
            var red=new Fraction(redGreenValue);
            var blue=new Fraction(blueYellowValue);

            if(red.greaterEqual(blue)){
                RGB_red=new Fraction("1");
                RGB_green=new Fraction("1").subtraction(red);
                RGB_blue=new Fraction("1").subtraction(red).addition(blue);
            }else{
                RGB_red=new Fraction("1").subtraction(blue).addition(red);
                RGB_green=new Fraction("1").subtraction(blue);
                RGB_blue=new Fraction("1");
            }
        }else if(redGreen=="red"&&blueYellow==""){
            var red=new Fraction(redGreenValue);

            RGB_red=new Fraction("1");
            RGB_green=new Fraction("1").subtraction(red);
            RGB_blue=new Fraction("1").subtraction(red);
        }else if(redGreen=="red"&&blueYellow=="yellow"){
            var red=new Fraction(redGreenValue);
            var yellow=new Fraction(blueYellowValue);

            if(red.greaterEqual(yellow)){
                RGB_red=new Fraction("1");
                RGB_green=new Fraction("1").subtraction(red).addition(yellow.division(new Fraction("2")));
                RGB_blue=new Fraction("1").subtraction(red);
            }else{
                RGB_red=new Fraction("1");
                RGB_green=new Fraction("1").subtraction(red.division(new Fraction("2")));
                RGB_blue=new Fraction("1").subtraction(yellow);
            }
        }else if(redGreen==""&&blueYellow=="blue"){
            var blue=new Fraction(blueYellowValue);

            RGB_red=new Fraction("1").subtraction(blue);
            RGB_green=new Fraction("1").subtraction(blue);
            RGB_blue=new Fraction("1");
        }else if(redGreen==""&&blueYellow==""){
            RGB_red=new Fraction("1");
            RGB_green=new Fraction("1");
            RGB_blue=new Fraction("1");
        }else if(redGreen==""&&blueYellow=="yellow"){
            var yellow=new Fraction(blueYellowValue);

            RGB_red=new Fraction("1");
            RGB_green=new Fraction("1");
            RGB_blue=new Fraction("1").subtraction(yellow);
        }else if(redGreen=="green"&&blueYellow=="blue"){
            var green=new Fraction(redGreenValue);
            var blue=new Fraction(blueYellowValue);

            if(green.greaterEqual(blue)){
                RGB_red=new Fraction("1").subtraction(green);
                RGB_green=new Fraction("1");
                RGB_blue=new Fraction("1").subtraction(green).addition(blue);
            }else{
                RGB_red=new Fraction("1").subtraction(blue);
                RGB_green=new Fraction("1").subtraction(blue).addition(green);
                RGB_blue=new Fraction("1");
            }
        }else if(redGreen=="green"&&blueYellow==""){
            var green=new Fraction(redGreenValue);

            RGB_red=new Fraction("1").subtraction(green);
            RGB_green=new Fraction("1");
            RGB_blue=new Fraction("1").subtraction(green);
        }else if(redGreen=="green"&&blueYellow=="yellow"){
            var green=new Fraction(redGreenValue);
            var yellow=new Fraction(blueYellowValue);

            if(green.greaterEqual(yellow)){
                RGB_red=new Fraction("1").subtraction(green).addition(yellow.division(new Fraction("2")));
                RGB_green=new Fraction("1");
                RGB_blue=new Fraction("1").subtraction(green);
            }else{
                RGB_red=new Fraction("1").subtraction(green.division(new Fraction("2")));
                RGB_green=new Fraction("1");
                RGB_blue=new Fraction("1").subtraction(yellow);
            }
        }

        luminance=new Fraction(luminance);
        RGB_red=luminance.multiplication(RGB_red);
        RGB_green=luminance.multiplication(RGB_green);
        RGB_blue=luminance.multiplication(RGB_blue);

        RGB_red=RGB_red.multiplication(new Fraction("255")).whole;
        RGB_green=RGB_green.multiplication(new Fraction("255")).whole;
        RGB_blue=RGB_blue.multiplication(new Fraction("255")).whole;

        return `rgb(${String(RGB_red)}, ${String(RGB_green)}, ${String(RGB_blue)})`;
    }
}

Colors.perfectColors=[
    Colors.color("1", "red", "1", "blue", "1"),
    Colors.color("1", "green", "1", "blue", "1"),
    Colors.color("1", "", "0", "", "0"),
    Colors.color("1", "red", "1", "", "0"),
    Colors.color("0", "", "0", "", "0"),
    Colors.color("1", "", "0", "blue", "1"),
    Colors.color("0|2'", "red", "1", "yellow", "1"),
    Colors.color("0|2'", "", "0", "", "0"),
    Colors.color("1", "red", "1", "yellow", "1"),
    Colors.color("1", "", "0", "yellow", "1"),
    Colors.color("1", "red", "0|2'", "blue", "1"),
    Colors.color("1", "green", "1", "", "0")
];