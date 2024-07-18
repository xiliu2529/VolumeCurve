// Layout.tsx
import React, { useState } from 'react';
import './Layout.css';
import Header from '../Header/Header';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import SettingsChartGridPage from '../../pages/SettingsChartGridPage/SettingsChartGridPage'
import GridChartPage from '../../pages/GridChartPage/GridChartPage'
import SettingsGridPage from '../../pages/SettingsGridPage/SettingsGridPage'
import Grid from '../../pages/GridPage/GridPage'
import SettingsChartPage from '../../pages/SettingsChartPage/SettingsChartPage'
import GraphPage from '../../pages/GraphPage/GraphPage'
import ConfigChartBottom from '../../pages/ConfigChartBottom/ConfigChartBottom'
import ChartBottom from '../../pages/ChartBottom/ChartBottom'
import HistoryAndSettings from '../../pages/HistoryAndSettings/HistoryAndSettings'
import HistoricalData from '../../pages/HistoricalData/HistoricalData'
import { useMyContext } from '../../contexts/MyContext'; // 导入上下文提供者

const Layout: React.FC = () => {
  // 定义状态来存储从 LeftSidebar 组件传递过来的值和显示状态
  const [clickedButton, setClickedButton] = useState<number | null>(null);
  const [showMainContent, setShowMainContent] = useState(true); // 默认显示 MainContent

  const { isHistoricalActive } = useMyContext(); // 获取上下文中的 alignment
  
  // 定义处理函数，用于接收从 LeftSidebar 组件传递过来的值，并控制 MainContent 的显示状态
  const handleButtonClick = (buttonName: number) => {
    setClickedButton(buttonName);
    setShowMainContent(false); // 点击按钮后隐藏 MainContent
  };

  return (
    <div className="layout">
      <Header />
      <div className="body">
        <LeftSidebar onButtonClick={handleButtonClick}/>
        {renderContent()}
      </div>
    </div>
  );

  // 根据接收到的值显示不同的内容
  function renderContent() {
    if (!isHistoricalActive) {
      switch (clickedButton) {
        case 9:
          return <HistoryAndSettings />;
        case 10:
          return <HistoricalData />;
        default:
          return <HistoryAndSettings />;
      }
    }

    switch (clickedButton) {
      case 0:
        return <SettingsChartGridPage />;
      case 1:
        return <SettingsChartGridPage />;
      case 2:
        return <GridChartPage />;
      case 3:
        return <SettingsGridPage />;
      case 4:
        return <Grid />;
      case 5:
        return <SettingsChartPage />;
      case 6:
        return <GraphPage />;
      case 7:
        return <ConfigChartBottom />;
      case 8:
        return <ChartBottom />;
      default:
        return <SettingsChartGridPage />;
    }
  }
};

export default Layout;
