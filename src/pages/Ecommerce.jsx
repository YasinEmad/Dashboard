// Improved UI for the Ecommerce component

import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { IoIosMore } from 'react-icons/io'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { Doughnut, LineChart, SparkLine, Stacked, Button } from '../components'
import { useStateContext } from '../contexts/ContextProvider'
import product9 from '../data/product9.jpg'
import {
  earningData,
  recentTransactions,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData
} from '../data/dummy'

const DropDown = ({ currentMode }) => (
  <div className="px-2 py-1 border border-gray-300 rounded-md w-28 dark:border-gray-600">
    <DropDownListComponent
      id='time'
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: currentMode === 'Dark' ? 'white' : 'black' }}
      value='1'
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth='120px'
    />
  </div>
)

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext()

  return (
    <div className="px-4 mt-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="col-span-1 p-6 bg-white bg-no-repeat bg-cover shadow-lg dark:bg-secondary-dark-bg rounded-2xl bg-hero-pattern">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-300">Earnings</p>
              <h2 className="text-3xl font-bold">$6,448.78</h2>
            </div>
            <button
              type='button'
              style={{ background: currentColor }}
              className='p-4 text-xl text-white rounded-full shadow hover:shadow-xl'
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <Button color='white' bgColor={currentColor} text='Download' borderRadius='10px' className='w-full mt-6' />
        </div>

        {earningData.map((item) => (
          <div
            key={item.title}
            className='flex flex-col items-center justify-center p-6 text-center bg-white shadow-lg dark:bg-secondary-dark-bg rounded-2xl'
          >
            <button
              type='button'
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className='p-4 mb-4 text-xl rounded-full shadow hover:shadow-xl'
            >
              {item.icon}
            </button>
            <h3 className="text-lg font-semibold">{item.amount}</h3>
            <span className={`text-sm text-${item.pcColor}`}>{item.percentage}</span>
            <p className="mt-1 text-sm text-gray-400">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 mt-10 xl:grid-cols-2">
        <div className="p-6 bg-white shadow-lg dark:bg-secondary-dark-bg rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Revenue Updates</h3>
            <div className="flex gap-4 text-sm">
              <span className="flex items-center text-gray-600 dark:text-gray-300"><GoPrimitiveDot /> Expense</span>
              <span className="flex items-center text-green-500"><GoPrimitiveDot /> Budget</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="pr-4 border-r dark:border-gray-700">
              <p className="text-2xl font-semibold">$93,438 <span className="px-2 py-1 ml-2 text-xs text-white bg-green-400 rounded-full">23%</span></p>
              <p className="mt-1 text-gray-400">Budget</p>
              <p className="mt-6 text-2xl font-semibold">$48,487</p>
              <p className="mt-1 text-gray-400">Expense</p>
              <SparkLine
                curentColor={currentColor}
                id='line-sparkLine'
                type='Line'
                height='80px'
                width='100%'
                data={SparklineAreaData}
                color={currentColor}
              />
              <Button color='white' bgColor={currentColor} text='Download Reports' borderRadius='10px' className='mt-6' />
            </div>
            <Stacked currentMode={currentMode} width='100%' height='360px' />
          </div>
        </div>

        <div className="grid gap-6">
          <div className='p-6 rounded-2xl' style={{ backgroundColor: currentColor }}>
            <p className="text-xl font-semibold text-white">Earnings</p>
            <h2 className="mt-4 text-3xl text-white">$63,448.78</h2>
            <p className="text-gray-200">Monthly Revenue</p>
            <div className="mt-6">
              <SparkLine
                currentColor={currentColor}
                id='column-sparkLine'
                type='Column'
                height='100px'
                data={SparklineAreaData}
                width='100%'
                color='rgb(242, 252, 253)'
              />
            </div>
          </div>

          <div className='flex items-center justify-between p-6 bg-white shadow-lg dark:bg-secondary-dark-bg rounded-2xl'>
            <div>
              <h2 className="text-2xl font-semibold">$43,246</h2>
              <p className="text-gray-400">Yearly Sales</p>
            </div>
            <Doughnut id='pie-chart' data={ecomPieChartData} legendVisibility={false} height='160px' />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2">
        <div className="p-6 bg-white shadow-lg dark:bg-secondary-dark-bg rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Recent Transactions</h3>
            <DropDown currentMode={currentMode} />
          </div>
          {recentTransactions.map((item) => (
            <div key={item.title} className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <button
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className='p-3 text-xl rounded-lg shadow hover:shadow-xl'
                >
                  {item.icon}
                </button>
                <div>
                  <h4 className='font-semibold'>{item.title}</h4>
                  <p className='text-sm text-gray-400'>{item.desc}</p>
                </div>
              </div>
              <span className={`text-${item.pcColor}`}>{item.amount}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4">
            <Button color='white' bgColor={currentColor} text="Add" borderRadius='10px' />
            <p className='text-sm text-gray-400'>36 Recent Transactions</p>
          </div>
        </div>

        <div className='p-6 bg-white shadow-lg dark:bg-secondary-dark-bg rounded-2xl'>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Sales Overview</h3>
            <DropDown currentMode={currentMode} />
          </div>
          <LineChart />
        </div>
      </div>
    </div>
  )
}

export default Ecommerce