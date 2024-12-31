/*
 * @Description: 自定义节点
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-29 12:50:12
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2024-12-29 18:22:15
 */
import { register, getTeleport } from "@antv/x6-vue-shape"
import { Node } from "@antv/x6"

import CustomNode from "./index.vue"

export default class BtpCustomNode extends Node {
  constructor(type, graph, options) {
    super(options)
    this.type = type
    this.graph = graph
    this.options = options
  }

  static register() {
    register({
      shape: "custom-vue-node",
      width: "auto",
      height: 104,
      component: CustomNode,
    })
  }

  static createNode(type, graph, options) {
    return graph.addNode({
      shape: "custom-vue-node",
      ...options,
    })
  }
}

