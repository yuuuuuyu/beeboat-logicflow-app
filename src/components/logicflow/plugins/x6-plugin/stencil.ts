/*
 * @Description: Dnd面板扩展Stencil
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-28 12:40:30
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-02 21:21:39
 */
import { Stencil } from "@antv/x6-plugin-stencil"
import { Graph } from "@antv/x6"

import BtpCustomNode from "../node/index"
import { thumbProps } from "element-plus"

export default class BtpStencil extends Stencil {
  private stencilContainer: HTMLDivElement
  private options: Object
  // 画布
  private blf: Graph
  private stencil: Stencil
  // 自定义节点实例
  private bcn: BtpCustomNode

  public defaultAttrs: Object = {
    label: "",
    attrs: {
      body: {
        stroke: "#8f8f8f",
        strokeWidth: 1,
        fill: "#fff",
        rx: 6,
        ry: 6,
      },
    },
  }
  constructor(options) {
    super(options)
    this.options = options

    let { container, target, nodeInstance } = options
    this.stencilContainer = container
    this.blf = target
    this.bcn = nodeInstance

    // 初始化stencil面板
    this.initStencil()
    // 初始化面板数据
    this.initStencilData()
    // 加载面板数据
    this.loadStencilData()
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
    this.bcn.createNode()
  }
  loadStencilData(): void {
    this.bcn.loadNode(this.stencil)
  }
}

