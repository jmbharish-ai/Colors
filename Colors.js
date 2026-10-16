import {Fraction} from './Fraction.js';

export class Colors{
    static color(luminance, redGreen, redGreenValue, blueYellow, blueYellowValue){
        var RGB_red=new Fraction("1");
        var RGB_green=new Fraction("1");
        var RGB_blue=new Fraction("1");

        if(redGreenValue.greaterEqual(blueYellowValue)){
            if(redGreen=="red"){
                green=green.subtraction(redGreenValue);
                blue=blue.subtraction(redGreenValue);
                if(blueYellow=="blue"){
                    blue=blue.addition(blueYellowValue);
                }else if(blueYellow=="yellow"){
                    var modified=blueYellow.division(new Fraction("2"));
                    green=green.addition(modified);
                }
            }else if(redGreen=="green"){
                red=red.subtraction(redGreenValue);
                blue=blue.subtraction(redGreenValue);
                if(blueYellow=="blue"){
                    blue=blue.addition(blueYellowValue);
                }else if(blueYellow=="yellow"){
                    var modified=blueYellowValue.division(new Fraction("2"));
                    red=red.addition(modified);
                }
            }
        }else if(blueYellowValue.greaterEqual(redGreenValue)){
            if(blueYellow=="blue"){
                red=red.subtraction(blueYellowValue);
                green=green.subtraction(blueYellowValue);
                if(redGreen=="red"){
                    red=red.addition(redGreenValue);
                }else if(redGreen=="green"){
                    green=green.addition(redGreenValue);
                }
            }else if(blueYellow=="yellow"){
                blue=blue.subtraction(blueYellowValue);
                if(redGreen=="red"){
                    var modified=redGreenValue.division(new Fraction("2"));
                    green=green.subtraction(modified);
                }else if(redGreen=="green"){
                    var modified=redGreenValue.division(new Fraction("2"));
                    red=red.subtraction(modified);
                }
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