/*
 * @Description:
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-28 12:40:30
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-01 21:37:40
 */
import { Stencil } from "@antv/x6-plugin-stencil"
import { Graph } from "@antv/x6"

import BtpCustomNode from "../node/index"
import { thumbProps } from "element-plus"

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

    // 初始化stencil面板
    this.initStencil()
    // 初始化面板数据
    this.initStencilData()
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
      target: this.blf,
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
  initStencilData(): void {
    BtpCustomNode.createNode(this.blf, this.stencil)
  }

  load(nodes) {
    this.stencil.load(nodes, "group1")
  }
}

