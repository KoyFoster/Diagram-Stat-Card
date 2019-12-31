import React from "react";
import { Box } from '@material-ui/core';
import {Vector2,  Coll} from './KoyMath.js';
import StatInputCtrls from "./StatInputCtrls.js"

const iDiagramScale = 144;

//Grade Function
var gradeCalc = function(index, Ranges, Values, letterGrades)
{   
    var result = letterGrades[7];//? grade
    //Take Values and divide it against it's max range
    var percentage = (Values[index]/Ranges[index][1])*100;

    //Upper or lower value assignment
    var masymenos = (value) => 
    {
        if(value > 10){result += '+';} else if(value < 10){result += '-';}
    };

    //Letter Assignment
    if(percentage > 100)
    {
        result = letterGrades[7];
        masymenos(percentage-80);
    }
    else if(percentage === 100)
    {
        result = letterGrades[6];
        masymenos(percentage-80);
    }
    else if(percentage >= 80)
    {
        result = letterGrades[5];
        masymenos(percentage-80);
    }
    else if(percentage >= 60)
    {
        result = letterGrades[4];
        masymenos(percentage-60);
    }
    else if(percentage >= 40)
    {
        result = letterGrades[3];
        masymenos(percentage-40);
    }
    else if(percentage >= 20)
    {        
        result = letterGrades[2];
        masymenos(percentage-20);
    }
    else if(percentage > 0)
    {
        result = letterGrades[1];
        masymenos(percentage);
    }
    else if(percentage === 0)
    {
        result = letterGrades[0];
    }
    return result;//Return '?'
}

/*Update Diagram*/
var SetupDiagram = function(Quantity, Center, Degrees)
{
    /*Iterate For Each Triangle*/
    var v2Polygon = [new Vector2(0,0), new Vector2(0, -1*iDiagramScale), new Vector2(0, -1*iDiagramScale)];
    var mesh = [];
    console.log(Quantity, Center, Degrees)
    for (var i = 1; i < Quantity+1; i++)
    {
        //Adjust Angles
        if(i === 1)
        {
            Coll.v2Rotate2D(v2Polygon[2],v2Polygon[0],Degrees)
            mesh.push([v2Polygon[0].x, v2Polygon[0].y]); mesh.push([v2Polygon[1].x, v2Polygon[1].y]); mesh.push([v2Polygon[2].x, v2Polygon[2].y]);
        }
        else
        {
            Coll.v2Rotate2D(v2Polygon[1],v2Polygon[0],Degrees);
            Coll.v2Rotate2D(v2Polygon[2],v2Polygon[0],Degrees);
            mesh.push([v2Polygon[0].x, v2Polygon[0].y]); mesh.push([v2Polygon[1].x, v2Polygon[1].y]); mesh.push([v2Polygon[2].x, v2Polygon[2].y]);
        }
    }    
    //Offset Coordinates
    return mesh.map(function (arr) { return [Center[0] + arr[0], Center[1] + arr[1]]; });
};

//Stats 2 and 3 are the same everytime
var SetupStats = function(Quantity, Center, Degrees, Ranges, Values)
{
    var mesh = [];
    var v2Polygon;
    var v2FirstPoint;//Done to save an operation step
    /*Iterate For Each Triangle*/
    for (var i = 0; i < Quantity; i++)
    {
        //Adjust Angles
        if(i === 0)//First Stat
        {
            v2Polygon = [new Vector2(0,0), new Vector2(0, (-Values[0]*(1/Ranges[i][1])*iDiagramScale)), new Vector2(0, (-Values[1]*(1/Ranges[i][1])*iDiagramScale))];
            v2FirstPoint = Coll.v2Rotate2D(v2Polygon[1],v2Polygon[0],Degrees*i);/*The Current Stat Point*/
            Coll.v2Rotate2D(v2Polygon[2],v2Polygon[0],Degrees*(i+1));/*The Next Stat Point*/
        }
        else if(i !== Quantity-1)//Mid Stats
        {
            v2Polygon = [new Vector2(0,0), v2Polygon[2], new Vector2(0, (-Values[i+1]*(1/Ranges[i+1][1])*iDiagramScale))];
            Coll.v2Rotate2D(v2Polygon[2],v2Polygon[0],Degrees*(i+1));/*The Next Stat Point*/
        }
        else//Last Stat
        {
            v2Polygon = [new Vector2(0,0), v2Polygon[2], v2FirstPoint];
        }
        mesh.push([v2Polygon[0].x, v2Polygon[0].y]); mesh.push([v2Polygon[1].x, v2Polygon[1].y]); mesh.push([v2Polygon[2].x, v2Polygon[2].y]);
    }    
    //Offset Coordinates
    return mesh.map(function (arr) { return [Center[0] + arr[0], Center[1] + arr[1]]; });
};

var SetupTextAndTicks = function(Quantity, Center, Degrees, Ranges, Values, Types, letterGrades)
{
    var htmlResult = [];
    for (var i = 0; i < Quantity; i++)
    {   
        /*Stat Type Label*/
        var iAngle = i*Degrees;

        var iFlip = 0;
        //Rotate text around it's center if upsidedown
        if(iAngle > 90 && iAngle < 270)
        {
            iFlip = 180;
        }        
        var typeCenter = [Center[0], Center[1]-iDiagramScale];
        htmlResult.push( 
        <text textAnchor="middle" style={{stroke: "rgb(0,0,0)", fontSize: 14, strokeWidth: 1}} x={typeCenter[0]} y={typeCenter[1]-6} transform={"rotate("+iAngle+", "+Center[0]+","+Center[1]+"), rotate("+iFlip+","+typeCenter[0]+","+(typeCenter[1]-10)+")"} > 
        {Types[i]}
        </text>);

        htmlResult.push( 
        <text textAnchor="middle" style={{stroke: "rgb(0,0,0)", fontSize: 40, strokeWidth: 1}} x={typeCenter[0]} y={typeCenter[1]-40} transform={"rotate("+iAngle+", "+Center[0]+","+Center[1]+"), rotate("+-iAngle+","+typeCenter[0]+","+(typeCenter[1]-50)+")"} > 
        {gradeCalc(i, Ranges, Values, letterGrades)}
        </text>);

        /*Stat Ticks*/
        var ticks = 10;
        for(var iT = 1; iT<ticks; iT++)
        {
            htmlResult.push(<line x1={-4+Center[0]} y1={Center[1]-((iDiagramScale/ticks)*iT)} x2={4+Center[0]} y2={Center[1]-((iDiagramScale/ticks)*iT)} style={{stroke: "rgb(0,0,0)", strokeWidth: 1}} transform={"rotate("+iAngle+", "+Center[0]+","+Center[1]+")"} />);
           
            if((iT%2) === 0)
            {
                //Deinfe and round off the tick values
                var tickValue = Math.round(100 * (iT*( Ranges[i][1]/ticks)) )/100;
                typeCenter = [Center[0]+5, Center[1]-((iDiagramScale/ticks)*iT)+3];
                htmlResult.push(
                <text x={typeCenter[0]} y={typeCenter[1]} style={{stroke: "rgb(0,0,0)", strokeWidth: 1}} transform={"rotate("+iAngle+", "+(Center[0])+","+Center[1]+"), rotate("+iFlip+","+(typeCenter[0]-5)+","+(typeCenter[1]-3)+")"}>
                    {tickValue}
                </text>);
            }
        }
    }
    return htmlResult
};

class Diagram extends React.Component
{    
    constructor(props){
        super(props);
        this.state = 
        {
            //User inputted stats as semi-colin dilimited strings
                iQuantity: 5,
                TotalPoints:  0,

                Ranges:     [[0,8], [0,10], [0,7],      [0,10],        [0,9],       [0,2],      [0,10]],
                Types:      ["POWER","SPEED","RANGE",   "DURABILITY",  "PRECISION", "POTENTIAL","???"],
                Values:     [5,1,1, 1,1,1, 1],
                
                letterGrades:   ['F','E','D','C','B','A','S','?'],
                statGrades:     [0,0,0,0,0,0,0,0,0,0,0,0,0],
            
                //Window Dimensions Window Center
                iDegrees: null,
                iDim: [iDiagramScale*3, iDiagramScale*3],
                Center: [null, null],
                meshDiagram: null,
                meshStats: null,
                htmlText: null,
        };
        this.state.Center = [this.state.iDim[0]/2, this.state.iDim[1]/2];
        this.state.iDegrees = (360/this.state.iQuantity);

        this.state.meshDiagram = SetupDiagram(this.state.iQuantity, this.state.Center, this.state.iDegrees);
        this.state.meshStats = SetupStats(this.state.iQuantity, this.state.Center, this.state.iDegrees, this.state.Ranges, this.state.Values);
        this.state.htmlText = SetupTextAndTicks(this.state.iQuantity, this.state.Center, this.state.iDegrees, this.state.Ranges, this.state.Values, this.state.Types, this.state.letterGrades);
    };

    //Update Functions
    UpdateQuantity(props)
    {
        //vars
        var iIndex = props.target.name;

        if(props.target.name === "Quantity")
        {
            //Adjust State Arrays and update TotalPoints
            var arrDiff = props.target.value - this.state.Values.length;
            var totalPoints = 0;
            for(var i=0; i < this.state.iQuantity; i++)
            {
                //push additional elements if change in size exceeds current size
                if(i < arrDiff+1)
                {
                    this.state.Ranges.push([0,10]);
                    this.state.Types.push("???");
                    this.state.Values.push(0);
                    
                    this.state.statGrades.push(0);
                };
                totalPoints += this.state.Values[i];
            };
            
            var Quantity = parseInt(props.target.value);                
            var Center = [this.state.iDim[0]/2, this.state.iDim[1]/2];
            var iDegrees = (360/props.target.value);

            this.setState({
                TotalPoints: totalPoints,

                iQuantity: Quantity,
                Center: Center,
                iDegrees: iDegrees,
                meshDiagram: SetupDiagram(Quantity, Center, iDegrees),
                meshStats: SetupStats(Quantity, Center, iDegrees, this.state.Ranges, this.state.Values),
                htmlText: SetupTextAndTicks(Quantity, Center, iDegrees, this.state.Ranges, this.state.Values, this.state.Types, this.state.letterGrades)
            });
        }
        else if(iIndex.search("Value") > -1)
        {
            iIndex = parseInt(iIndex.replace("Value", ""));
            var tempVal = this.state.Values;
            tempVal[iIndex] = parseInt(props.target.value);

            this.setState({Values: tempVal,
                meshStats: SetupStats(this.state),
                htmlText: SetupTextAndTicks(this.state)});
        }
        else if(iIndex.search("Types") > -1)
        {
            iIndex = parseInt(iIndex.replace("Types", ""));
            var tempTypes = this.state.Types;    
            tempTypes[iIndex] = props.target.value;

            this.setState({Types: tempTypes,
                meshStats: SetupStats(this.state),
                htmlText: SetupTextAndTicks(this.state)});
        }
        else if(iIndex.search("Ranges") > -1)
        {
            iIndex = iIndex.replace("Ranges", "");
            var iIndex2;
            if(iIndex.search("Min") > -1)
            {
                iIndex = parseInt(iIndex.replace("Min", ""));
                iIndex2 = 0;
            }
            else
            {
                iIndex = parseInt(iIndex.replace("Max", ""));
                iIndex2 = 1;
            }
            var tempRanges = this.state.Ranges;            
            tempRanges[iIndex][iIndex2] = parseInt(props.target.value);

            this.setState({Ranges: tempRanges,
                meshStats: SetupStats(this.state),
                htmlText: SetupTextAndTicks(this.state)});
        }
    };

    render(){
        //console.log(this.state);
        return(
            <div>
                <div>
                    <svg width={this.state.iDim[0]} height={this.state.iDim[1]} >
                        <circle cx={this.state.Center[0]} cy={this.state.Center[1]} r={1*iDiagramScale} style={{fill: "white", fillOpacity: 0.5, stroke: "black", strokeWidth: 2}} />
                        <defs>
                            <linearGradient id = "grad">
                                <stop offset="0" stopColor="purple"/>
                                <stop offset="1" stopColor="lightBlue"/>
                            </linearGradient>
                        </defs>
                        {<polygon points={this.state.meshDiagram} style={{fill: "white", fillOpacity: 0.5, stroke: "black", strokeWidth: 1, fillRule: "evenodd"}} />}
                        {<polygon points={this.state.meshStats} fill = "url(#grad)" style={{fillOpacity: 0.66, stroke: "red", strokeWidth: 0, fillRule: "evenodd"}} />}
                        {this.state.htmlText}
                    </svg>
                </div>
                <Box display="flexbox" border="2px solid #3f0000" bgcolor="darkGrey" color="#a4a4a4" width={this.state.iDim[0]} height={this.state.iDim[1]}>
                    <StatInputCtrls
                        Quantity        = {this.state.iQuantity}
                        TotalPoints     = {this.state.TotalPoints}
                        Types           = {this.state.Types}
                        Values          = {this.state.Values}
                        Ranges           = {this.state.Ranges}
                        
                        UpdateQuantity  = {this.UpdateQuantity.bind(this)}
                        /*onChange = {this.UpdateQuantity.bind(this)}*/ >
                    </StatInputCtrls>
                </Box>
            </div>
        );
    }
}

export default Diagram;
