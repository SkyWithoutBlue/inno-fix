import React from 'react';

const ProductionProcess = () => {
  const processes = [
    {
      number: '1',
      title: 'Проектирование',
      description: 'анализ требований клиента, создание чертежей.'
    },
    {
      number: '2',
      title: 'Прототипирование',
      description: 'изготовление и тестирование опытных образцов.'
    },
    {
      number: '3',
      title: 'Массовое производство',
      description: 'выпуск продукции на высокоточном оборудовании.'
    },
    {
      number: '4',
      title: 'Контроль качества',
      description: 'проверка каждой партии перед отправкой.'
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12">
      <h2 className="text-center text-[30px] font-bold mb-[60px]">Производственный процесс</h2>
      <div className="t-container">
        <div className="hidden lg:flex flex-row justify-between">
          {processes.map((process, index) => (
            <div key={`desktop-${index}`} className="t1106__col t-item t-col t-col_3 flex-1">
              <div className="t1106__numberwrapper">
                <div className="t1106__number bg-[#032A62] rounded-full w-[46px] h-[46px] flex items-center justify-center">
                  <div className="t1106__digit t-name t-name_xs text-white">{process.number}</div>
                </div>
                {index !== processes.length - 1 && <div className="t1106__line"></div>}
              </div>
              <div className="t1106__textwrapper t-align_left">
                <div className="t1106__title t-name t-name_md">
                  <div style={{ fontSize: '20px' }} data-customstyle="yes">
                    <strong>{process.title}</strong>
                  </div>
                </div>
                <div className="t1106__text t-text t-text_xs">
                  {process.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          {processes.map((process, index) => (
            <div key={`mobile-${index}`} className="flex mb-12 last:mb-0">
              <div className="relative">
                <div className="t1106__number bg-[#032A62] rounded-full w-[46px] h-[46px] flex items-center justify-center">
                  <div className="t1106__digit t-name t-name_xs text-white">{process.number}</div>
                </div>
                {index !== processes.length - 1 && (
                  <div className="absolute left-1/2 top-[23px] w-[1px] h-[calc(100%+35px)] bg-[#032A62] transform -translate-x-1/2"></div>
                )}
              </div>
              <div className="ml-6">
                <div className="text-[20px] font-bold mb-2">{process.title}</div>
                <div className="text-[#666666]">{process.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionProcess;
