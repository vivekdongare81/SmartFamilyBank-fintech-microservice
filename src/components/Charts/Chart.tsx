import React from 'react';

interface ChartProps {
  data: { label: string; value: number; color?: string }[];
  type: 'pie' | 'bar' | 'line';
  title?: string;
}

const Chart: React.FC<ChartProps> = ({ data, type, title }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];

  if (type === 'pie') {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    const radius = 60;
    const center = 80;

    return (
      <div className="w-full">
        {title && <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>}
        <div className="flex items-center justify-center">
          <svg width="160" height="160" className="mr-6">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const angle = (item.value / total) * 360;
              const x1 = center + radius * Math.cos((currentAngle * Math.PI) / 180);
              const y1 = center + radius * Math.sin((currentAngle * Math.PI) / 180);
              const x2 = center + radius * Math.cos(((currentAngle + angle) * Math.PI) / 180);
              const y2 = center + radius * Math.sin(((currentAngle + angle) * Math.PI) / 180);
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              const path = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
              
              currentAngle += angle;
              
              return (
                <path
                  key={index}
                  d={path}
                  fill={item.color || colors[index % colors.length]}
                  stroke="white"
                  strokeWidth="2"
                />
              );
            })}
          </svg>
          <div className="space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color || colors[index % colors.length] }}
                />
                <span className="text-sm text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'bar') {
    return (
      <div className="w-full">
        {title && <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>}
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-20 text-sm text-gray-600 text-right">{item.label}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: item.color || colors[index % colors.length]
                  }}
                />
              </div>
              <div className="w-16 text-sm text-gray-800 font-medium">${item.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>Chart type not supported</div>;
};

export default Chart;