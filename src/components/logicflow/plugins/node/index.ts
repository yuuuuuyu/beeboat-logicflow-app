/*
 * @Description: 自定义节点
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-29 12:50:12
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-02 22:44:23
 */
import { register, getTeleport } from "@antv/x6-vue-shape"
import { Stencil } from "@antv/x6-plugin-stencil"
import { Graph, Node } from "@antv/x6"

import CustomNode from "./index.vue"
import address from "./address.vue"
import box from "./box.vue"
import parent from "./parent.vue"

export default class BtpCustomNode {
  private blf: Graph
  constructor(graph: Graph) {
    this.blf = graph

    // 实例化时自动注册节点
    this.register()
  }

  register() {
    register({
      shape: "custom-address",
      width: 260,
      height: 32,
      component: address,
    })
    register({
      shape: "custom-box",
      width: 260,
      height: 32,
      component: box,
    })
    register({
      shape: "custom-parent",
      width: 260,
      height: 32,
      component: parent,
    })
  }

  private node: Node[] = []
  createNode() {
    this.node = [
      this.blf.createNode({
        shape: "custom-address",
        data: {
          label: "vue-component-01",
          styles: {
            background: "#ccc",
            fontSize: "16px",
          },
        },
      }),
      this.blf.createNode({
        shape: "custom-box",
        data: {
          label: "vue-component-02",
          styles: {
            background: "#ccc",
            fontSize: "16px",
          },
        },
      }),
      this.blf.createNode({
        shape: "custom-parent",
        data: {
          parent: true,
          label: "vue-component-parent",
          styles: {
            background: "red",
            fontSize: "12px",
            lineHeight: "32px",
          },
        },
      }),
    ]
  }

  loadNode(stencil: Stencil) {
    stencil.load(this.node, "group1")
  }
}

