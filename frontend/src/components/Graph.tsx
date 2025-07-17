import { useEffect, useRef, useState } from 'react';
import Loader from './Loader';
import * as d3 from 'd3';

const Graph = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    setIsLoading(true);

    const timeout = setTimeout(() => {

      const svg = d3.select(svgElement);
      svg.selectAll("*").remove();

      const x = d3.scaleLinear().domain([0, 100]).range([marginLeft, width - marginRight]);
      const y = d3.scaleLinear().domain([0, 100]).range([height - marginBottom, marginTop]);

      svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x));

      svg.append("g")
        .attr("transform", `translate(${marginLeft}, 0)`)
        .call(d3.axisLeft(y));

      const L = 100;
      const q = 1;

      const data = d3.range(0, L + 1).map(xVal => {
        const M = (q / 2) * xVal * (L - xVal);
        return { x: xVal, y: M };
      });

      y.domain([0, d3.max(data, d => d.y) ?? 100]);

      const line = d3.line<{ x: number, y: number }>()
        .x(d => x(d.x))
        .y(d => y(d.y));

      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2)
        .attr("d", line);

      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div>
      {isLoading && (
        <div>
          <p>Calculating the graph...</p>
          <Loader />
        </div>
      )}
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default Graph;
