// startup.component.ts

import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgGraphComponent implements OnInit, AfterViewInit {
  private svg: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeD3();
  }

  initializeD3(): void {
    const pointCount = 5;
    const lineCount = 25;
    const random = d3.randomNormal(30, 25);

    this.svg = d3.select(this.elementRef.nativeElement).select('svg');

    const NumberLines = d3.range(0, lineCount);
    const w = 500,
          h = 150;

    const x = d3.scaleLinear()
                .domain([0, pointCount - 1])
                .range([0, w]);

    const y = d3.scaleLinear()
                .domain([0, 55])
                .range([0, h]);

    let prevData = d3.range(pointCount).map(random);
    const data = d3.range(lineCount).map((i) => {

      if (i === 0) {
        return prevData;
      } else {
        const next_data = prevData.map((v: any) => {
          return v + Math.random() * 2;
        });

        prevData = next_data;
        return next_data;
      }
    });

    const vector = d3.range(lineCount).map(() => {
      return d3.range(pointCount).map(() => {
        return Math.random() < 0.5 ? 1 : -1;
      });
    });

    const line = d3.line()
                   .x((d: any, i: number) => x(i))
                   .y((d: any) => y(d));

                   const numerPath = this.svg.append('g')
                   .selectAll("path")
                   .data(NumberLines)
                   .enter()
                   .append('path')
                   .attr('stroke', 'url(#gradient_svg)')
                   .attr('fill', 'none');

    const path = this.svg.selectAll('path')
                         .datum(data[0])
                         .attr("d", line.curve(d3.curveBasis));

    const update = () => {
      const transition = d3.transition()
                           .duration(500)
                           .ease(d3.easeSin);
      const z = 1;

      path.each(function(this: any, d: any, i: number) {

        data[i] = data[i].map((v: any, k: number) => {
          if (vector[i][k] > 0 && v > 50) {
            vector[i][k] = -1;
          }
          if (vector[i][k] < 0 && v < 10) {
            vector[i][k] = 1;
          }
          return v + z * vector[i][k];
        });

        d3.select(this)
          .datum(data[i])
          .transition(transition)
          .attr("d", line.curve(d3.curveBasis));
      });
    };

    d3.interval(() => {
      update();
    }, 100);
  }
}
