import React from 'react';
import InfoPanelGrid from '../../Components/InfoPanelGrid/InfoPanelGrid';
import Chart from '../../Components/Chart/Chart';
import ConditionSetting from '../../Components/ConditionSetting/ConditionSetting';
import InfoPanel from '../../Components/InfoPanel/InfoPanel';
import Grid from '../../Components/Grid/Grid';
import InfoPanelHistoricalGrid from '../../Components/InfoPanelGrid/InfoPanelHistoricalGrid';
import './PageSwitcher.css'

export const SettingsChartGridPage: React.FC = () => {
  return (
    <div className='SettingsChartGridPage'>
      <ConditionSetting />
      <div className='SettingsChartGridPage-InfoPanelGrid'>
        <InfoPanelGrid />
      </div>
      <Chart height={530} width={300} />

    </div>
  );
};

export const GridChartPage: React.FC = () => {
  return (
    <div className='GridChartPage'>
      <div className="page-left">
        <div className='GridChartPage-InfoPanel'>
          <InfoPanel />
        </div>
        <div className='GridChartPage-GRid'><Grid /></div>
      </div>
      <div className="GridChartPage-Chart">
        <Chart height={'86%'} width={600} />
      </div>
    </div>
  );
};

export const SettingsGridPage: React.FC = () => {

  return (
    <div className='SettingsGridPage'>
      <div className='SettingsGridPage-ConditionSetting'>
        <ConditionSetting />
      </div>
      <div className='SettingsGridPage-InfoPanelGrid'>
        <InfoPanelGrid />
      </div>
    </div>
  );
};

export const GridPage: React.FC = () => {


  return (
    <div className='gridnomi'>
      <Grid />
    </div>
  );
};

export const SettingsChartPage: React.FC = () => {


  return (
    <div className='SettingsChartPage'>
      <ConditionSetting />
      <div className='SettingsChart-InfoPanelChart'>
        <InfoPanel />

        <Chart height={'45%'} width={900} />
      </div>
    </div>
  );
};
export const GraphPage: React.FC = () => {


  return (
    <div className='GraphPage'>
      <div className='GraphPage-InfoPanel'><InfoPanel /></div>
      <div> <Chart height={'32%'} width={null} /></div>
    </div>
  );
};

export const ConfigChartBottom: React.FC = () => {

  return (
    <div className='ConfigChartBottom'>
      <div className='left-column'>
        <ConditionSetting />
      </div>
      <div className='right-column'>
        <div className='right-top'>   <InfoPanelGrid /></div>
        <div className='right-bottom'> <Chart height={'23%'} width={'900'} /></div>
      </div>
    </div>
  );
};

export const ChartBottom: React.FC = () => {


  return (
    <div className='ChartBottom'>
      <div className='ChartBottom-top'>   <InfoPanelGrid /></div>
      <div className='ChartBottom-bottom'> <Chart height={'17%'} width={null} /></div>
    </div>
  );
};
export const HistoryAndSettings: React.FC = () => {


  return (
    <div className='SettingsGridPage'>
      <div className='SettingsGridPage-ConditionSetting'>
        <ConditionSetting />
      </div>
      <div className='SettingsGridPage-InfoPanelGrid'>
        <InfoPanelHistoricalGrid />
      </div>
    </div>
  );
};

export const HistoricalData: React.FC = () => {

  return (
    <div className='InfoPanelHistoricalGrid'>
      <InfoPanelHistoricalGrid />
    </div>
  );
};
