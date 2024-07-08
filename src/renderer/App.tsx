import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../components/Base/Button';
import LottieAnimation from '../components/Base/LottieAnimation';
import Table from '../components/Base/Table';
import animationFigure from '../animation/figure.json';
import animationCloud from '../animation/cloud.json';

function Update() {
  const [currentAppVersion, setCurrentAppVersion] = useState<string>('');
  const [updateInfo, setUpdateInfo] = useState<Record<string, any>>({});

  useEffect(() => {
    window.electron.ipcRenderer.once('get-app-version', (arg: any) => {
      setCurrentAppVersion(arg);
    });
    window.electron.ipcRenderer.sendMessage('get-app-version');

    window.electron.ipcRenderer.once('update-downloaded', (info: any) =>
      setUpdateInfo(info),
    );
  }, []);

  const installHandler = () =>
    window.electron.ipcRenderer.sendMessage('install-update');

  return (
    <div className="w-full flex flex-col">
      <div className="absolute top-0 w-full left-0 mt-6">
        {updateInfo?.version ? (
          <h1 className="text-center text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            Aviable new version ⬇️
          </h1>
        ) : (
          <h1 className="text-center text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            All updates are already installed ✅
          </h1>
        )}
      </div>

      {updateInfo?.version && (
        <div className="flex justify-betwee w-full">
          <div className="w-1/2">
            <Table data={updateInfo} />
            <Button className="mt-8" onClick={installHandler} type="button">
              🔨 Update
            </Button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <LottieAnimation
              className="overflow-hidden md:w-[400px] h-[400px]"
              classNameCanvas="md:w-[400px] h-[400px]"
              animationData={animationCloud}
            />
          </div>
        </div>
      )}

      {updateInfo?.version ? (
        <> </>
      ) : (
        <LottieAnimation
          className="overflow-hidden md:w-[400px] h-[400px]"
          classNameCanvas="md:w-[400px] h-[400px]"
          animationData={animationFigure}
        />
      )}

      <p className="absolute bottom-0 left-0 p-10">
        version: {currentAppVersion}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Update />} />
      </Routes>
    </Router>
  );
}
