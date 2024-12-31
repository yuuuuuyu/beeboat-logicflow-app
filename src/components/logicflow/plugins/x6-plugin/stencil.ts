/*
 * @Description:
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-28 12:40:30
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2024-12-29 21:15:11
 */
import { Stencil } from "@antv/x6-plugin-stencil"
import { Graph } from "@antv/x6"

export default class BtpStencil extends Stencil {
  private stencilContainer: HTMLDivElement
  private options: Object
  private blf: Graph
  private stencil: Stencil

  constructor(options) {
    super(options)
    this.options = options

    let { container, target } = options
    this.stencilContainer = container
    this.blf = target

    this.initStencil()
  }
  /**
   * 自定义节点面板
   */
  commonAttrs = {
    body: {
      fill: "#fff",
      stroke: "#8f8f8f",
      strokeWidth: 1,
    },
  }
  initStencil(): void {
    this.stencil = new Stencil({
      target: this.stencilContainer,
      stencilGraphWidth: 200,
      stencilGraphHeight: 800,
      collapsable: true,
      groups: [
        {
          name: "group1",
          title: "Group 1",
        },
      ],
      layoutOptions: {
        columns: 1,
        columnWidth: 100,
        rowHeight: 40,
      },
    })
    this.stencilContainer.appendChild(this.stencil.container)
  }

  load(nodes) {
    this.stencil.load(nodes, "group1")
  }
}

