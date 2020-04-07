import React, { useState } from "react";
import TemplateSelector from './TemplateSelector'
import { Box, Paper, MenuItem } from '@material-ui/core';
import StatInputForm from './StatInputForm.js'
import Diagram from "./Diagram.js";
import StatData from "./StatData.js";
import {Row, Col} from './DivGrid'
import StatCode from './StatCode'

// defaultTemplates
const iDefTmpl = 0;
const defaultTemplates = [
    {
        label:      'Jojo',
        values:     [['POWER',3.0,1,10,''], ['SPEED',4.0,1,10,''], ['RANGE',4.0,1,10,''], ['DURABILITY',8.0,1,10,''], ['PRECISION',4.0,1,10,''], ['POTENTIAL',2.0,1,10,'']],
        pntLimit:  60,
        pntDiff: false
    },
    {
        label:  'Dark Souls III',
        values: [['Vigor',15,1,99,''],['Attunement',10,1,99,''],['Endurance',15,1,99,''], ['Vitality',15,1,99,''],['Strength',20,1,99,''],['Dexterity',18,1,99,''], ['Intelligence',10,1,99,''],['Faith',10,1,99,''],['Luck',10,1,99,''], ['Hollowing',99,1,99,'X']],
        pntLimit: 802,
        pntDiff: true
    },
    {
        label:  'Kono Subarashii',
        values: [['Strength',79,79,99,''],['Health',21,21,99,''], ['Magic Power',92,92,99,''],['Dexterity',3,3,99,''],['Agility',42,42,99,''], ['Luck',1,1,99,'']],
        pntLimit: 0,
        pntDiff: true
    },
    {
        label:  'ArcheAge',
        values: [['Strength',1380,3,2560,''],['Agility',58,3,2560,''],['Stamina',158,3,2560,''],['Spirit',58,3,2560,''],['Intelligence',158,58,2560,''], ['Cast Time',100,0,100,'%'],['Attack Speed',50,0,100,'%'],['Move Speed',5.4,5.4,10,'m/s']],
        pntLimit: 2560,
        pntDiff: false
    }
];

function compileMenuItems()
{
    let result = [];

    for(let i=0; i < defaultTemplates.length; i++)
    {
        result.push(<MenuItem key={defaultTemplates[i].label} value={defaultTemplates[i]} >{defaultTemplates[i].label}</MenuItem>);
    }
    return result;
}
const tmplMenuItems = compileMenuItems();

function LoadTemplateData(statData = null, template = this.props.defaultTemplates[0])
{
    if(Object.keys(template).length === 0) {return false;}
    // Copy Template
    const newArr = new Array(...template.values);
    const newPL = Number(template.pntLimit);
    const newPD = Boolean(template.pntDiff);
    for(let i=0; i<newArr.length; i++)
    {
        newArr[i] = new Array(...newArr[i]);
    }
    
    //If data needs to be updated now
    if(statData !== null)
    {
        statData.data.iQuantity     = template.values.length;
        statData.data.Values        = newArr;
        statData.data.PointLimit    = newPL;
        statData.data.PointDiff     = newPD
    }
    else
    {
        statData.setData(
        {
            iQuantity:  template.values.length,
            Values:     newArr,
            PointLimit: newPL,
            PointDiff:  newPD
        });
    }
    
    return true;
}

// Stat Card
function StatCard(props)
{
    const [data, setData] = useState({
        Name: '',
        Size: 0,
        Values:     [['',0,0,0,'']],
        PointMin:   0,
        PointDiff: false,
        PointTotal: 0,
        PointLimit: 0,
    });

    // Render and Logic
    console.log('data:', data);
    return(
    <Box name='body' style={{display: 'flex', justifyContent: 'center', overflow: 'auto'}} bgcolor='darkGrey'>
        <StatData {...props} data={data} /* onChange={e => setData(e)} */ />
        <Row alignItems='top'>
            <Col alignSelf ='top'>
                <TemplateSelector Name = {data.Name} /* setValue = {val => setData({...data, Name: val})} */ defaultValue={defaultTemplates[iDefTmpl]} MenuItems={tmplMenuItems} /* OnTemplateChange={data.SetNewData.bind(this)} */ />
                <Paper style={{width: '320px', margin: 4, padding: 4, display: 'flex', flexDirection: 'column'}}>
                <StatInputForm
                    Quantity    = {data.Size}
                    PointTotal  = {data.PointTotal}

                    PointMin    = {data.PointMin}
                    PointMax    = {data.PointMax}
                    PointLimit  = {data.PointLimit}
                    Values      = {data.Values}

                    PointDiff   = {data.PointDiff}

                    // UpdateStates  = {this.UpdateStates.bind(this)}
                    // RandomizeStats  = {this.RandomizeStats.bind(this)}
                    // UpdatePointLimit  = {this.UpdatePointLimit.bind(this)}
                />
                </Paper>
                <StatCode /* GetURLCode={ GetURLCode.bind(this) } */  />
            </Col>
            <Paper style={{width: '768px', margin: 4, padding: 4, display: 'flexbox', flexDirection: 'row'}}>
            <Diagram data={data} />
            </Paper>
        </Row>
    </Box>
    )
};

export default StatCard;