import { TextField, Grid, Typography, Button, Stack, ToggleButton, ToggleButtonGroup, MenuItem, Checkbox, Select, FormControlLabel } from '@mui/material';
import React, {useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import './ConditionSetting.css';
import { useMyContext } from '../../contexts/MyContext';

const ConditionSetting: React.FC = () => {
  const [alignment, setAlignment] = React.useState('1');
  const [value, setValue] = useState<number>(0);
  const [age, setAge] = React.useState('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [marketState, setMarketState] = useState({
    preMarketOpening: false,
    preMarketClose: false,
    postMarketOpening: false,
    postMarketClose: false,
    eveningOpening: false,
    eveningClose: false,
  });
  const [date, setDate] = useState<string>('');
  const [checkedState, setCheckedState] = React.useState<boolean[]>([false, false, false]);

  const { setConditionSettingState } = useMyContext();
  useEffect(() => {
    if (setConditionSettingState) {
      setConditionSettingState({ marketState });
    }
  }, [marketState, setConditionSettingState]);

  const selectedStyle = {
    '&.Mui-selected': {
      backgroundColor: '#E8ECF0',
      color: '#143867',
      fontWeight: '900',
    },
  };

  const handleIncrement = () => setValue(prev => prev + 1);
  const handleDecrement = () => setValue(prev => prev - 1);
  const handleChange = (event: SelectChangeEvent) => setAge(event.target.value as string);
  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };
  const handleCheckboxChange = (key: keyof typeof marketState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarketState({
      ...marketState,
      [key]: event.target.checked,
    });
  };

  const handleDateChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => setter(event.target.value);
  const sqhandleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCheckedState = checkedState.map((item, i) => i === index ? event.target.checked : item);
    setCheckedState(updatedCheckedState);
  };
  const renderUI = () => {
    switch (alignment) {
      case '1':
        return (
          <Stack direction="row" spacing={1} alignItems="center" className='counter-controls'>
            <Typography variant="body1" sx={{ fontSize: '10px' }}>日数</Typography>
            <Button variant="outlined" size="small" onClick={handleDecrement} sx={{ padding: 0, width: '25px', minWidth: '25px', height: '25px', fontSize: '25px' }}>-</Button>
            <TextField
              variant="outlined"
              value={value}
              size="small"
              InputProps={{ readOnly: true, sx: { padding: 0, '& input': { height: '10px', textAlign: 'center' } } }}
              sx={{ width: '55px', '& .MuiOutlinedInput-root': { padding: 0 } }}
            />
            <Button variant="outlined" size="small" onClick={handleIncrement} sx={{ padding: 0, width: '25px', minWidth: '25px', height: '25px', fontSize: '25px' }}>+</Button>
          </Stack>
        );
      case '2':
        return (
          <div>
            <div>
              <p style={{ display: 'inline-block', fontSize: '10px' }}>開始日</p>
              <input className='setDate' type="date" value={date} onChange={handleDateChange(setDate)} />
            </div>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1" sx={{ fontSize: '10px' }}>日数</Typography>
              <Button variant="outlined" size="small" onClick={handleDecrement} sx={{ padding: 0, width: '25px', minWidth: '25px', height: '25px', fontSize: '25px' }}>-</Button>
              <TextField
                variant="outlined"
                value={value}
                size="small"
                InputProps={{ readOnly: true, sx: { padding: 0, '& input': { height: '10px', textAlign: 'center' } } }}
                sx={{ width: '55px', '& .MuiOutlinedInput-root': { padding: 0 } }}
              />
              <Button variant="outlined" size="small" onClick={handleIncrement} sx={{ padding: 0, width: '25px', minWidth: '25px', height: '25px', fontSize: '25px' }}>+</Button>
            </Stack>
          </div>
        );
      case '3':
        return (
          <div>
            <div>
              <p style={{ display: 'inline-block', fontSize: '10px' }}>終了日</p>
              <input className='setDate' type="date" value={date} onChange={handleDateChange(setDate)} />
            </div>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1" sx={{ fontSize: '10px' }}>日数</Typography>
              <Button variant="outlined" size="small" onClick={handleDecrement} sx={{ padding: 0, width: '25px', minWidth: '25px', height: '25px', fontSize: '25px' }}>-</Button>
              <TextField
                variant="outlined"
                value={value}
                size="small"
                InputProps={{ readOnly: true, sx: { padding: 0, '& input': { height: '10px', textAlign: 'center' } } }}
                sx={{ width: '55px', '& .MuiOutlinedInput-root': { padding: 0 } }}
              />
              <Button variant="outlined" size="small" onClick={handleIncrement} sx={{ padding: 0, width: '25px', minWidth: '25px', height: '25px', fontSize: '25px' }}>+</Button>
            </Stack>
          </div>
        );
      case '4':
        return (
          <Grid container spacing={1} alignItems="center" sx={{ marginTop: '0px' }}>
            <Grid item>
              <Typography variant="body1" sx={{ fontSize: '10px' }}>期間</Typography>
            </Grid>
            <input className='setDate' type="date" value={date} onChange={handleDateChange(setDate)} />
            <Grid item>
              <Typography variant="body1">-</Typography>
            </Grid>
            <input className='setDate' type="date" value={date} onChange={handleDateChange(setDate)} />
          </Grid>
        );
      case '5':
        return (
          <div>
            <FormControlLabel
              control={<Checkbox checked={checkedState[0]} onChange={sqhandleChange(0)} />}
              label={<span style={{ fontSize: '10px' }}>Large-SQ</span>}
            />
            <FormControlLabel
              control={<Checkbox checked={checkedState[1]} onChange={sqhandleChange(1)} />}
              label={<span style={{ fontSize: '10px' }}>Small-SQ</span>}
            />
            <FormControlLabel
              control={<Checkbox checked={checkedState[2]} onChange={sqhandleChange(2)} />}
              label={<span style={{ fontSize: '10px' }}>Weekly-SQ</span>}
            />
          </div>
        );
      default:
        return null;
    }
  };
  const handleCalculate = () => {
    // 算出逻辑
  };

  return (
    <><div className='commonsp-top'>
      <div className='commonsp'>
        
        <div className='title-1'>銘柄設定</div>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body1" sx={{ fontSize: "10px" }}>銘柄入力</Typography>
          <TextField
            sx={{
              width: '60px', height: '30px',
              '& .MuiInputBase-root': { height: '100%', padding: '0 8px' }
            }}
          />
          <Typography variant="body1" sx={{ fontSize: "10px" }}>東証プライム</Typography>
        </Stack>

        <div className='title-1'>期間設定</div>
        <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
          <ToggleButton value="1" className="ToggleButton" sx={selectedStyle}>直近</ToggleButton>
          <ToggleButton value="2" className="ToggleButton" sx={selectedStyle}>開始日</ToggleButton>
          <ToggleButton value="3" className="ToggleButton" sx={selectedStyle}>終了日</ToggleButton>
          <ToggleButton value="4" className="ToggleButton" sx={selectedStyle}> 開始終了日</ToggleButton>
          <ToggleButton value="5" className="ToggleButton" sx={selectedStyle}>SQ-日</ToggleButton>
        </ToggleButtonGroup>
        <div className="content-container">
          {renderUI()}
        </div>
        <div id='title-2' className='title-1'>算出間隔</div>
        <Stack direction="row" spacing={1} alignItems="center">
          <p>間隔</p>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
          <p>分間隔</p>
        </Stack>

        <Grid container spacing={1} alignItems="center" sx={{ marginTop: '5px' }}>
          <Grid item>
            <Typography variant="body1">開始終了時刻</Typography>
          </Grid>
          <Grid item>
            <TextField type="time" variant="outlined" sx={{ width: '75px' }} value={startTime} onChange={handleDateChange(setStartTime)} />
          </Grid>
          <Grid item>
            <Typography variant="body1">-</Typography>
          </Grid>
          <Grid item>
            <TextField type="time" variant="outlined" sx={{ width: '75px' }} value={endTime} onChange={handleDateChange(setEndTime)} />
          </Grid>
        </Grid>
        <p style={{ marginBottom: 0 }}>個别算出</p>
        <div>
          <Grid container spacing={1} alignItems="center" >
            <Typography variant="body1" padding='10px' paddingRight='50px'>前場</Typography>
            <FormControlLabel control={<Checkbox checked={marketState.preMarketOpening} onChange={handleCheckboxChange('preMarketOpening')} />} label="寄付" />
            <FormControlLabel control={<Checkbox checked={marketState.preMarketClose} onChange={handleCheckboxChange('preMarketClose')} />} label="引け" />
          </Grid>

          <Grid container spacing={1} alignItems="center" >
            <Typography variant="body1" padding='10px' paddingRight='50px'>後場</Typography>
            <FormControlLabel control={<Checkbox checked={marketState.postMarketOpening} onChange={handleCheckboxChange('postMarketOpening')} />} label="寄付" />
            <FormControlLabel control={<Checkbox checked={marketState.postMarketClose} onChange={handleCheckboxChange('postMarketClose')} />} label="引け" />
          </Grid>

          <Grid container spacing={1} alignItems="center" >
            <Typography variant="body1" padding='10px' paddingRight='13.7px'>イブニング</Typography>
            <FormControlLabel control={<Checkbox checked={marketState.eveningOpening} onChange={handleCheckboxChange('eveningOpening')} />} label="寄付" />
            <FormControlLabel control={<Checkbox checked={marketState.eveningClose} onChange={handleCheckboxChange('eveningClose')} />} label="引け" />
          </Grid>
        </div>
        </div>  <Button sx={{ backgroundColor: '#143867', color: '#fff', marginLeft: '200px', borderRadius: '15px', marginTop: '25px' }} onClick={handleCalculate}>
          算出
        </Button>
      
        </div>
      


    </>
  );
};

export default ConditionSetting;