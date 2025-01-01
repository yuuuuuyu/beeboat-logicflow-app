/*
 * @Description: 自定义节点
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-29 12:50:12
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-01 21:45:15
 */
import { register, getTeleport } from "@antv/x6-vue-shape"
import { Stencil } from "@antv/x6-plugin-stencil"
import { Graph, Node } from "@antv/x6"

import CustomNode from "./index.vue"

export default class BtpCustomNode {
  constructor(type, graph, options) {
    // super(options)
    this.type = type
    this.graph = graph
    this.options = options
    // 实例化
    // TODO
  }

  static register() {
    console.log(1111111)

    register({
      shape: "custom-vue-node",
      width: 240,
      height: 104,
      component: CustomNode,
    })
  }

  static createNode(graph: Graph, stencil: Stencil) {
    console.log(22222)
    const r1 = graph.createNode({
      shape: "custom-vue-node",
      data: {
        label: "vue-component-01",
        styles: {
          background: "#ccc",
          fontSize: "16px",
        },
      },
    })
    stencil.load([r1], "group1")
  }
}

