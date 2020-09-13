const defaultTemplates = {
  Blank: {
    Game: 'Blank',
    Title: 'Blank',
    Style: {},
    Values: [],
  },
  Jojo: {
    Game: 'Jojo',
    Title: 'Jojo',
    Style: {
      // default
      fontSize: 'inherit',
      fontFamily: 'inherit',
      fontWeight: 'inherit',

      color: 'inherit',
      background: 'inherit',
      backgroundColor: 'inherit',

      justifyContent: 'inherit',
      textAlignLast: 'inherit',

      '& input': {
        border: 'none',
        borderWidth: '1px',
        borderColor: 'inherit',
        borderBottom: 'solid',
      },
      '& hr': {
        color: '#6e573588',
        backgroundColor: '#6e573588',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '10px',
      },
      // Profile
      '& h1': {
        backgroundColor: '#999999',
      },
      // Profile
      '& h2': {
        fontSize: 12,
        fontFamily: 'NotoSansKR, serif',
        fontWeight: 'inherit',

        color: '#6e5735',
        background: 'inherit',
        backgroundColor: 'inherit',

        justifyContent: 'top',
        textAlignLast: 'center',

        '& button': {
          width: '64px',
          borderRadius: '8px',

          filter: 'brightness(88%)',

          background: 'inherit',
          backgroundColor: 'inherit',
        },
      },
      // Card
      '& h3': {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',

        color: 'inherit',
        background: 'inherit',
        backgroundColor: '#faf8e8',

        justifyContent: 'inherit',
        textAlignLast: 'inherit',

        border: '4px solid #6e5735',
        borderRadius: '5px',

        padding: '16px',
        margin: '4px',

        minWidth: '328px',

        // Level
        "& input[type='number']": {
          width: '64px',
        },
        // Level
        "& input[type='text']": {
          width: '100%',
        },
      },
      // Card Title
      '& h4': {},
      // Stat Block Title
      '& h5': {
        // Level
        "& input[type='text']": {
          width: '100%',
        },
      },
      '& h6': {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',

        color: 'inherit',
        background: 'inherit',
        backgroundColor: '#faf8e8',
        display: 'inline',
        '& div': { '& button': { width: 'auto' } },
      },
      '& tbody': {},
      '& thead': {},
      '& tfoot': {},
      '& table': {
        // borderCollapse: 'collapse',
        '& tr': {
          '& td': {
            '& button': {},
            "& input[type='number']": {
              width: '48px',
            },
            "& input[type='text']": {
              width: '64px',
            },
          },
          '& td:nth-child(1)': {
            textAlignLast: 'left',
            width: ['props'].Mode !== 'Edit' ? '176px' : undefined,
          },
          '& td:nth-child(2)': {
            textAlignLast: ['props'].Mode !== 'View' ? 'center' : 'left',
            width: ['props'].Mode !== 'Edit' ? '140px' : undefined,
            '& input': {
              // borderRadius: ['props'].Type === 'Static' ? '8px' : undefined,
            },
          },
          '& td:nth-child(3)': {
            textAlignLast: ['props'].Mode === 'Edit' ? 'center' : 'left',
          },
          '& td:nth-child(4)': {
            textAlignLast: ['props'].Mode === 'Edit' ? 'center' : 'left',
          },
          '& td:nth-child(5)': {
            textAlignLast: ['props'].Mode === 'Edit' ? 'center' : 'left',
          },
        },
        '& colgroup': {
          '& col:nth-child(1)': {
            /* border: '1px solid green' */
          },
          '& col:nth-child(2)': {},
          '& col:nth-child(3)': {},
          '& col:nth-child(4)': {},
          '& col:nth-child(5)': {},
        },
      },
    },
    Values: [
      {
        bEdit: false,
        Value: 'Stand',
        Values: [
          {
            bEdit: true,
            Value: 'Hermit Purple',
            Type: 'Static',
            Level: '',
            Total: 25,
            Min: '0',
            Max: '10',
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'POWER',
                Num: { result: 3 },
                Min: { result: 1 },
                Max: { result: 10 },
                Unit: '',
              },
              {
                Value: 'SPEED',
                Num: { result: 4 },
                Min: { result: 1 },
                Max: { result: 10 },
                Unit: '',
              },
              {
                Value: 'RANGE',
                Num: { result: 4 },
                Min: { result: 1 },
                Max: { result: 10 },
                Unit: '',
              },
              {
                Value: 'DURABILITY',
                Num: { result: 8 },
                Min: { result: 1 },
                Max: { result: 10 },
                Unit: '',
              },
              {
                Value: 'PRECISION',
                Num: { result: 4 },
                Min: { result: 1 },
                Max: { result: 10 },
                Unit: '',
              },
              {
                Value: 'POTENTIAL',
                Num: { result: 2 },
                Min: { result: 1 },
                Max: { result: 10 },
                Unit: '',
              },
            ],
          },
        ],
      },
    ],
  },
  'Dark Souls III': {
    Game: 'Dark Souls III',
    Title: 'Dark Souls III',
    Style: {
      fontSize: 'inherit',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      color: 'inherit',
      background: 'inherit',
      backgroundColor: 'inherit',
      justifyContent: 'inherit',
      textAlignLast: 'inherit',
      '& input': { border: 'none', borderWidth: '1px', borderColor: 'inherit' },
      '& hr': { display: 'none' },
      '& h1': {},
      '& h2': {
        fontSize: 22,
        fontFamily: 'Adobe Garamond, serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: 'inherit',
        background: 'inherit',
        backgroundColor: 'inherit',
        justifyContent: 'top',
        textAlignLast: 'center',
        '& button': {
          width: '64px',
          borderRadius: '8px',
          filter: 'brightness(88%)',
          background: 'inherit',
          backgroundColor: 'inherit',
        },
      },
      '& h3': {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        color: '#bbbbbb',
        background: 'inherit',
        backgroundColor: '#232126',
        justifyContent: 'inherit',
        textAlignLast: 'inherit',
        border: '2px solid #dbdbdb',
        borderRadius: '5px',
        padding: '22px',
        margin: '4px',
        minWidth: '328px',
        "& input[type='number']": { width: '64px' },
        "& input[type='text']": { width: '100%' },
      },
      '& h4': {
        color: '#aca69e',
        textAlignLast: 'left',
        "& input[type='text']": {
          width: '100%',
          borderBottom: '3px solid',
          borderImage:
            'linear-gradient(to right, rgba(80.0,73.0,58.0, 0), rgba(80.0,73.0,58.0, 1), rgba(80.0,73.0,58.0, 0)) 1',
        },
        '& label': {
          width: '100%',
          borderBottom: '3px solid',
          borderImage:
            'linear-gradient(to right, rgba(80.0,73.0,58.0, 0), rgba(80.0,73.0,58.0, 1), rgba(80.0,73.0,58.0, 0)) 1',
        },
      },
      '& h5': {
        color: '#aca69e',
        textAlignLast: 'left',
        "& input[type='text']": {
          color: '#bbb3a6',
          width: '100%',
          borderBottom: '3px solid',
          borderImage:
            'radial-gradient(rgba(80.0,73.0,58.0, 1) 40%, rgba(80.0,73.0,58.0, 0)) 1',
        },
        '& label': {
          width: '100%',
          borderBottom: '3px solid',
          borderImage:
            'radial-gradient(rgba(80.0,73.0,58.0, 1) 40%, rgba(80.0,73.0,58.0, 0)) 1',
        },
      },
      '& h6': {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        color: 'inherit',
        background: 'inherit',
        backgroundColor: '#faf8e8',
        display: 'inline',
        '& div': { '& button': { width: 'auto' } },
      },

      '& table': {
        borderCollapse: 'separate',
        emptyCells: 'show',
        '& tbody': {
          '& tr': {
            '& td': {
              '& button': {},
              "& input[type='number']": { width: '48px' },
              "& input[type='text']": { width: '64px' },
            },
            '& td:nth-child(1):empty': {
              borderBottom: '3px solid red',
              borderImage:
                'radial-gradient(rgba(80.0,73.0,58.0, 1) 40%, rgba(80.0,73.0,58.0, 0)) 1',
            },
            '& td:nth-child(1)': { textAlignLast: 'left', width: '176px' },
            '& td:nth-child(2)': {
              textAlignLast: 'center',
              width: '140px',
              '& input': {},
            },
            '& td:nth-child(3)': { textAlignLast: 'left' },
            '& td:nth-child(4)': { textAlignLast: 'left' },
            '& td:nth-child(5)': { textAlignLast: 'left' },
          },
        },

        '& thead': {},
        '& tfoot': {},
        '& colgroup': {
          '& col:nth-child(1)': {},
          '& col:nth-child(2)': {},
          '& col:nth-child(3)': {},
          '& col:nth-child(4)': {},
          '& col:nth-child(5)': {},
        },
      },
    },

    Values: [
      {
        P: { Game: 'Dark Souls III', Title: 'Dark Souls III', Values: [null] },
        Value: 'Koy',
        Values: [
          {
            Value: 'Attributes',
            Type: 'Static',
            Level: '',
            Total: 123,
            Min: 9,
            Max: 891,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Vigor',
                Num: { Value: 'Num', result: 15 },
                Min: { Value: 'Min', result: 1 },
                Max: { Value: 'Max', result: 99 },
                Unit: '',
              },
              {
                Value: 'Attunement',
                Num: { Value: 'Num', result: 10 },
                Min: { Value: 'Min', result: 1 },
                Max: { Value: 'Max', result: 99 },
                Unit: '',
              },
              {
                Value: 'Endurance',
                Num: { Value: 'Num', result: 15 },
                Min: { Value: 'Min', result: 1 },
                Max: { Value: 'Max', result: 99 },
                Unit: '',
              },
              {
                Value: 'Vitality',
                Num: { Value: 'Num', result: 15 },
                Min: { Value: 'Min', result: 1 },
                Max: { Value: 'Max', result: 99 },
                Unit: '',
              },
              {
                Value: 'Strength',
                Num: { Value: 'Num', result: 20 },
                Min: { Value: 'Min', result: 1 },
                Max: { Value: 'Max', result: 99 },
                Unit: '',
              },
              {
                Value: 'Dexterity',
                Num: { Value: 'Num', result: 18 },
                Min: { Value: 'Min', result: 1 },
                Max: { Value: 'Max', result: 99 },
                Unit: '',
              },
              {
                Value: 'Intelligence',
                Num: { Value: 'Num', result: 10 },
                Min: { Value: 'Min', result: 1 },
                Max: { Value: 'Max', result: 99 },
                Unit: '',
              },
              {
                Value: 'Faith',
                Num: { Value: 'Num', result: 10 },
                Min: { Value: 'Min', result: 1 },
                Max: { Value: 'Max', result: 99 },
                Unit: '',
              },
              {
                Value: 'Luck',
                Num: { Value: 'Num', result: 10 },
                Min: { Value: 'Min', result: 1 },
                Max: { Value: 'Max', result: 99 },
                Unit: '',
              },
            ],
          },
          {
            bEdit: false,
            Value: 'Misc',
            Type: 'Static',
            Level: '',
            Total: 0,
            Min: 0,
            Max: 99,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Hollowing',
                Num: { result: 0 },
                Min: { result: 0 },
                Max: { result: 99 },
                Unit: '',
              },
            ],
          },
        ],
      },
    ],
  },
  ArcheAge: {
    Game: 'ArcheAge',
    Title: "Koy's Stats",
    Style: {
      // default
      fontSize: 'inherit',
      fontFamily: 'inherit',
      fontWeight: 'inherit',

      color: 'inherit',
      background: 'inherit',
      backgroundColor: 'inherit',

      justifyContent: 'inherit',
      textAlignLast: 'inherit',

      '& input': {
        border: 'none',
        borderWidth: '1px',
        borderColor: 'inherit',
        borderBottom: 'solid',
      },
      '& hr': {
        color: '#6e573588',
        backgroundColor: '#6e573588',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '10px',
      },
      // Profile
      '& h1': {
        backgroundColor: '#999999',
      },
      // Profile
      '& h2': {
        fontSize: 12,
        fontFamily: 'NotoSansKR, serif',
        fontWeight: 'inherit',

        color: '#6e5735',
        background: 'inherit',
        backgroundColor: 'inherit',

        justifyContent: 'top',
        textAlignLast: 'center',

        '& button': {
          width: '64px',
          borderRadius: '8px',

          filter: 'brightness(88%)',

          background: 'inherit',
          backgroundColor: 'inherit',
        },
      },
      // Card
      '& h3': {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',

        color: 'inherit',
        background: 'inherit',
        backgroundColor: '#faf8e8',

        justifyContent: 'inherit',
        textAlignLast: 'inherit',

        border: '4px solid #6e5735',
        borderRadius: '5px',

        padding: '16px',
        margin: '4px',

        minWidth: '328px',

        // Level
        "& input[type='number']": {
          width: '64px',
        },
        // Level
        "& input[type='text']": {
          width: '100%',
        },
      },
      // Card Title
      '& h4': {},
      // Stat Block Title
      '& h5': {
        // Level
        "& input[type='text']": {
          width: '100%',
        },
      },
      '& h6': {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',

        color: 'inherit',
        background: 'inherit',
        backgroundColor: '#faf8e8',
        display: 'inline',
        '& div': { '& button': { width: 'auto' } },
      },
      '& tbody': {},
      '& thead': {},
      '& tfoot': {},
      '& table': {
        // borderCollapse: 'collapse',
        '& tr': {
          '& td': {
            '& button': {},
            "& input[type='number']": {
              width: '48px',
            },
            "& input[type='text']": {
              width: '64px',
            },
          },
          '& td:nth-child(1)': {
            textAlignLast: 'left',
            width: ['props'].Mode !== 'Edit' ? '176px' : undefined,
          },
          '& td:nth-child(2)': {
            textAlignLast: ['props'].Mode !== 'View' ? 'center' : 'left',
            width: ['props'].Mode !== 'Edit' ? '140px' : undefined,
            '& input': {
              // borderRadius: ['props'].Type === 'Static' ? '8px' : undefined,
            },
          },
          '& td:nth-child(3)': {
            textAlignLast: ['props'].Mode === 'Edit' ? 'center' : 'left',
          },
          '& td:nth-child(4)': {
            textAlignLast: ['props'].Mode === 'Edit' ? 'center' : 'left',
          },
          '& td:nth-child(5)': {
            textAlignLast: ['props'].Mode === 'Edit' ? 'center' : 'left',
          },
        },
        '& colgroup': {
          '& col:nth-child(1)': {
            /* border: '1px solid green' */
          },
          '& col:nth-child(2)': {},
          '& col:nth-child(3)': {},
          '& col:nth-child(4)': {},
          '& col:nth-child(5)': {},
        },
      },
    },
    Values: [
      {
        Value: 'Page One',
        Values: [
          {
            Value: 'Visible Player Stats',
            Type: 'Calc',
            Level: '',
            Total: 18864,
            Min: 732,
            Max: 61440,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Health',
                Num: {
                  Value: 'Num',
                  result: 2172,
                  expression: '12 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Stamina","Num"]}',
                },
                Min: {
                  Value: 'Min',
                  result: 36,
                  expression: '12 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Stamina","Min"]}',
                },
                Max: {
                  Value: 'Max',
                  result: 30720,
                  expression: '12 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Stamina","Max"]}',
                },
                Unit: '',
              },
              {
                Value: 'Mana',
                Num: {
                  Value: 'Num',
                  result: 16692,
                  expression: '12 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Intelligence","Num"]}',
                },
                Min: {
                  Value: 'Min',
                  result: 696,
                  expression: '12 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Intelligence","Min"]}',
                },
                Max: {
                  Value: 'Max',
                  result: 30720,
                  expression: '12 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Intelligence","Max"]}',
                },
                Unit: '',
              },
            ],
          },
          {
            Value: 'Primary Stats',
            Type: 'Static',
            Level: 2560,
            Total: 2356,
            Min: 82,
            Max: 12800,
            Points: {
              result: 2560,
              expression: 'a * 1',
              vars:
                '{"a":["Values","Page One","Values","Primary Stats","Level"],"b":["Values","Page One","Values","Primary Stats","Level"]}',
            },
            Values: [
              {
                Value: 'Strength',
                Num: { Value: 'Num', result: 83, expression: '15', vars: '{}' },
                Min: { Value: 'Min', result: 15, expression: '15', vars: '{}' },
                Max: {
                  Value: 'Max',
                  result: 2560,
                  expression: '2560',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Agility',
                Num: {
                  Value: 'Num',
                  result: 83,
                  expression: '119',
                  vars: '{}',
                },
                Min: { Value: 'Min', result: 3, expression: '3', vars: '{}' },
                Max: {
                  Value: 'Max',
                  result: 2560,
                  expression: '2560',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Stamina',
                Num: {
                  Value: 'Num',
                  result: 229,
                  expression: '181',
                  vars: '{}',
                },
                Min: { Value: 'Min', result: 3, expression: '3', vars: '{}' },
                Max: {
                  Value: 'Max',
                  result: 2560,
                  expression: '2560',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Spirit',
                Num: {
                  Value: 'Num',
                  result: 390,
                  expression: '216',
                  vars: '{}',
                },
                Min: { Value: 'Min', result: 3, expression: '3', vars: '{}' },
                Max: {
                  Value: 'Max',
                  result: 2560,
                  expression: '2560',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Intelligence',
                Num: {
                  Value: 'Num',
                  result: 1571,
                  expression: '1391',
                  vars: '{}',
                },
                Min: { Value: 'Min', result: 58, expression: '58', vars: '{}' },
                Max: {
                  Value: 'Max',
                  result: 2560,
                  expression: '2560',
                  vars: '{}',
                },
                Unit: '',
              },
            ],
          },
          {
            Value: 'Secondary Stats',
            Type: 'Calc',
            Level: '',
            Total: 727.8,
            Min: 30.4,
            Max: 7168,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Melee Attack',
                Num: {
                  Value: 'Num',
                  result: 20.6,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Strength","Num"]}',
                },
                Min: {
                  Value: 'Min',
                  result: 0.6,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Strength","Min"]}',
                },
                Max: {
                  Value: 'Max',
                  result: 512,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Strength","Max"]}',
                },
                Unit: '',
              },
              {
                Value: 'Range Attack',
                Num: {
                  Value: 'Num',
                  result: 23.8,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Agility","Num"]}',
                },
                Min: {
                  Value: 'Min',
                  result: 0.6,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Agility","Min"]}',
                },
                Max: {
                  Value: 'Max',
                  result: 512,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Agility","Max"]}',
                },
                Unit: '',
              },
              {
                Value: 'Magic Attack',
                Num: {
                  Value: 'Num',
                  result: 278.2,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Intelligence","Num"]}',
                },
                Min: {
                  Value: 'Min',
                  result: 11.6,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Intelligence","Min"]}',
                },
                Max: {
                  Value: 'Max',
                  result: 512,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Intelligence","Max"]}',
                },
                Unit: '',
              },
              {
                Value: 'Healing Power',
                Num: {
                  Value: 'Num',
                  result: 43.2,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Spirit","Num"]}',
                },
                Min: {
                  Value: 'Min',
                  result: 11.6,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Spirit","Min"]}',
                },
                Max: {
                  Value: 'Max',
                  result: 512,
                  expression: '0.2 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Spirit","Max"]}',
                },
                Unit: '',
              },
              {
                Value: 'Physical Defense',
                Num: {
                  Value: 'Num',
                  result: 181,
                  expression: '1 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Stamina","Num"]}',
                },
                Min: {
                  Value: 'Min',
                  result: 3,
                  expression: '1 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Stamina","Min"]}',
                },
                Max: {
                  Value: 'Max',
                  result: 2560,
                  expression: '1 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Stamina","Max"]}',
                },
                Unit: '',
              },
              {
                Value: 'Magic Defense',
                Num: {
                  Value: 'Num',
                  result: 181,
                  expression: '1 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Stamina","Num"]}',
                },
                Min: {
                  Value: 'Min',
                  result: 3,
                  expression: '1 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Stamina","Min"]}',
                },
                Max: {
                  Value: 'Max',
                  result: 2560,
                  expression: '1 * a',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Stamina","Max"]}',
                },
                Unit: '',
              },
            ],
          },
          {
            Value: 'Misc Stats',
            Type: 'Calc',
            Level: '',
            Total: 109.1,
            Min: 104.56,
            Max: 1278.54,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Move Speed',
                Num: { result: 6.1, expression: '6.1', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 5.4,
                  expression: '5.4',
                  vars: '{}',
                },
                Max: { Value: 'Max', result: 10, expression: '10', vars: '{}' },
                Unit: 'm/s',
              },
              {
                Value: 'Cast Time',
                Num: {
                  result: 40,
                  expression:
                    '(z = (100 - ((a <= 1000 ? a * 0.0137 : (1000 * 0.0137) + ((a - 1000) * 0.0013)) + (b <= 1000 ? b * 0.0137 : (1000 * 0.0137) + ((b - 1000) * 0.0013))) - 42.1) ) < 40 ? 40 : z',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Spirit","Num"],"b":["Values","Page One","Values","Primary Stats","Values","Intelligence","Num"]}',
                },
                Min: {
                  Value: 'Min',
                  result: 99.16,
                  expression:
                    '100 - ((a <= 1000 ? a * 0.0137 : (1000 * 0.0137) + ((a - 1000) * 0.0013)) + (b <= 1000 ? b * 0.0137 : (1000 * 0.0137) + ((b - 1000) * 0.0013)))',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Spirit","Min"],"b":["Values","Page One","Values","Primary Stats","Values","Intelligence","Min"]}',
                },
                Max: {
                  Value: 'Max',
                  result: 68.54,
                  expression:
                    '100 - ((a <= 1000 ? a * 0.0137 : (1000 * 0.0137) + ((a - 1000) * 0.0013)) + (b <= 1000 ? b * 0.0137 : (1000 * 0.0137) + ((b - 1000) * 0.0013)))',
                  vars:
                    '{"a":["Values","Page One","Values","Primary Stats","Values","Spirit","Max"],"b":["Values","Page One","Values","Primary Stats","Values","Intelligence","Max"]}',
                },
                Unit: '%',
              },
              {
                Value: 'Attack Speed',
                Num: { result: 63, expression: '63', vars: '{}' },
                Min: { Value: 'Min', result: 0, expression: '0', vars: '{}' },
                Max: {
                  Value: 'Max',
                  result: 1200,
                  expression: '1200',
                  vars: '{}',
                },
                Unit: '%',
              },
            ],
          },
        ],
      },
      {
        Value: 'Attack',
        Values: [
          {
            Value: 'Melee Attack',
            Type: 'Calc',
            Level: '',
            Total: 155.4,
            Min: 7,
            Max: 70,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Melee Attack Speed',
                Num: { result: 1.2, expression: '1.2', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: 'sec',
              },
              {
                Value: 'Melee Accuracy',
                Num: { result: 87.9, expression: '87.9', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Melee Critical Status',
                Num: { result: 2.3, expression: '2.3', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Melee Critical Damage',
                Num: { result: 50, expression: '50', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Backstab Melee Damage',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Melee Skill Damage',
                Num: { result: 6, expression: '6', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'PvE Melee Skills',
                Num: { result: 8, expression: '8', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
            ],
          },
          {
            Value: 'Ranged Attack',
            Type: 'Calc',
            Level: '',
            Total: 156.2,
            Min: 6,
            Max: 60,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Ranged Accuracy',
                Num: { result: 87.9, expression: '87.9', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Ranged Critical Status',
                Num: { result: 2.3, expression: '2.3', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Ranged Critical Damage',
                Num: { result: 50, expression: '50', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Backstab Ranged Damage',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Ranged Skill Damage',
                Num: { result: 8, expression: '8', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'PvE Ranged Skills',
                Num: { result: 8, expression: '8', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
            ],
          },
          {
            Value: 'Magic Attack',
            Type: 'Calc',
            Level: '',
            Total: 315,
            Min: 6,
            Max: 60,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Magic Accuracy',
                Num: { result: 100, expression: '100', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Magic Critical Status',
                Num: { result: 72.1, expression: '72.1', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Magic Critical Damage',
                Num: { result: 122.2, expression: '122.2', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Backstab Magic Damage',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Magic Skill Damage',
                Num: { result: 12.7, expression: '12.7', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'PvE Magic Skills',
                Num: { result: 8, expression: '8', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
            ],
          },
          {
            Value: 'Misc',
            Type: 'Calc',
            Level: '',
            Total: 590,
            Min: 5,
            Max: 50,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Focus',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Shield Defense Penetration Rate',
                Num: { result: 50, expression: '50', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Shield Defense Penetration',
                Num: { result: 50, expression: '50', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%(0)',
              },
              {
                Value: 'Defense Penetration',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Magic Defense Penetration',
                Num: { result: 490, expression: '490', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
            ],
          },
        ],
      },
      {
        Value: 'Defense',
        Values: [
          {
            Value: 'Defense',
            Type: 'Calc',
            Level: '',
            Total: 10019.8,
            Min: 7,
            Max: 70,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Parry Rate',
                Num: { result: 9.7, expression: '9.7', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Shield Block Rate',
                Num: {
                  Value: 'Num',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Evasion',
                Num: { result: 23.7, expression: '23.7', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Resiliance',
                Num: { result: 7465, expression: '7465', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Toughness',
                Num: { result: 2507, expression: '2507', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Siege Damage Reduction',
                Num: { result: 6.6, expression: '6.6', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'PvE Damage Reduction',
                Num: { result: 6.8, expression: '6.8', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
            ],
          },
          {
            Value: 'Melee Defense',
            Type: 'Calc',
            Level: '',
            Total: 74.7,
            Min: 0,
            Max: 100,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Melee Damage Reduction',
                Num: { result: 13.7, expression: '13.7', vars: '{}' },
                Min: { result: 0, expression: '0', vars: '{}' },
                Max: { result: 100, expression: '100', vars: '{}' },
                Unit: '%',
              },
              {
                Value: 'Fixed Melee Damage Reduction',
                Num: { result: 61, expression: '61', vars: '{}' },
                Min: { result: 0, expression: '0', vars: '{}' },
                Max: { result: 0, expression: '0', vars: '{}' },
                Unit: '',
              },
              {
                Value: 'PvE Melee Damage Reduction',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: { result: 0, expression: '0', vars: '{}' },
                Max: { result: 0, expression: '0', vars: '{}' },
                Unit: '',
              },
            ],
          },
          {
            Value: 'Ranged Defense',
            Type: 'Calc',
            Level: '',
            Total: 73.6,
            Min: 1,
            Max: 10,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Ranged Damage Reduction',
                Num: { result: 12.6, expression: '12.6', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Fixed Ranged Damage Reduction',
                Num: { result: 61, expression: '61', vars: '{}' },
                Min: { result: 0, expression: '0', vars: '{}' },
                Max: { result: 0, expression: '0', vars: '{}' },
                Unit: '',
              },
              {
                Value: 'PvE Ranged Damage Reduction',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: { result: 0, expression: '0', vars: '{}' },
                Max: { result: 0, expression: '0', vars: '{}' },
                Unit: '',
              },
            ],
          },
          {
            Value: 'Magic Defense',
            Type: 'Calc',
            Level: '',
            Total: 70.1,
            Min: 3,
            Max: 30,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Magic Damage Reduction',
                Num: { result: 21.1, expression: '21.1', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Fixed Magic Damage Reduction',
                Num: { result: 49, expression: '49', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'PvE Magic Damage Reduction',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
            ],
          },
        ],
      },
      {
        Value: 'Regen/Misc',
        Values: [
          {
            Value: 'Heal',
            Type: 'Calc',
            Level: '',
            Total: 66.7,
            Min: 4,
            Max: 40,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Critical Heal Rate',
                Num: { result: 10.7, expression: '10.7', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Critical Heal Bonus',
                Num: { result: 50, expression: '50', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Healing',
                Num: { result: 6, expression: '6.0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Healing Skill Damage',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
            ],
          },
          {
            Value: 'Regeneration',
            Type: 'Calc',
            Level: '',
            Total: 211,
            Min: 4,
            Max: 40,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Heal Regen',
                Num: { result: 79, expression: '79', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Continuous Heal Regen',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Mana Regen',
                Num: { result: 132, expression: '132', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
              {
                Value: 'Post-Cast Mana Regen',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '',
              },
            ],
          },
          {
            Value: 'Misc',
            Type: 'Calc',
            Level: '',
            Total: 22,
            Min: 5,
            Max: 50,
            Points: { result: 0, expression: '0', vars: '{}' },
            Values: [
              {
                Value: 'Received Healing',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Increased experience gain',
                Num: { result: 11, expression: '11', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Loot Drop Rate',
                Num: { result: 11, expression: '11', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Gold earned from hunting',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
              {
                Value: 'Stealth Detection',
                Num: { result: 0, expression: '0', vars: '{}' },
                Min: {
                  Value: 'Min',
                  result: 1,
                  expression: '1',
                  vars: '{}',
                },
                Max: {
                  Value: 'Max',
                  result: 10,
                  expression: '10',
                  vars: '{}',
                },
                Unit: '%',
              },
            ],
          },
        ],
      },
    ],
  },
};

export { defaultTemplates };
