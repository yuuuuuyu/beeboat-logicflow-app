/*
 * @Description: 自定义节点
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-29 12:50:12
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-02 21:40:11
 */
import { register, getTeleport } from "@antv/x6-vue-shape"
import { Stencil } from "@antv/x6-plugin-stencil"
import { Graph, Node } from "@antv/x6"

import CustomNode from "./index.vue"

export default class BtpCustomNode {
  private blf: Graph
  constructor(graph: Graph) {
    this.blf = graph

    // 实例化时自动注册节点
    this.register()
  }

  register() {
    register({
      shape: "custom-vue-node",
      width: 240,
      height: 104,
      component: CustomNode,
    })
  }

  private node: Node
  createNode() {
    this.node = this.blf.createNode({
      shape: "custom-vue-node",
      data: {
        label: "vue-component-01",
        styles: {
          background: "#ccc",
          fontSize: "16px",
        },
      },
    })
  }

  loadNode(stencil: Stencil) {
    stencil.load([this.node], "group1")
  }
}

