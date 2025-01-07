/*
 * @Description: 自定义节点
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-29 12:50:12
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-06 20:18:20
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
      width: 200,
      height: 50,
      component: parent,
      ports: {
        groups: {
          in: {
            position: "left",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "transparent",
                strokeWidth: 1,
                fill: "transparent",
              },
            },
          },

          out: {
            position: {
              name: "right",
              args: {
                dx: -32,
              },
            },

            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "transparent",
                strokeWidth: 1,
                fill: "transparent",
              },
            },
          },
        },
      },
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

  /**
   * 根据起点初始下游节点的位置信息
   * @param node 起始节点
   * @param graph
   * @returns
   */
  getDownstreamNodePosition(node: Node, graph: Graph, dx = 250, dy = 100) {
    // 找出画布中以该起始节点为起点的相关边的终点id集合
    const downstreamNodeIdList: string[] = []
    graph.getEdges().forEach(edge => {
      const originEdge = edge.toJSON()?.data
      if (originEdge.source === node.id) {
        downstreamNodeIdList.push(originEdge.target)
      }
    })
    // 获取起点的位置信息
    const position = node.getPosition()
    let minX = Infinity
    let maxY = -Infinity
    graph.getNodes().forEach(graphNode => {
      if (downstreamNodeIdList.indexOf(graphNode.id) > -1) {
        const nodePosition = graphNode.getPosition()
        // 找到所有节点中最左侧的节点的x坐标
        if (nodePosition.x < minX) {
          minX = nodePosition.x
        }
        // 找到所有节点中最x下方的节点的y坐标
        if (nodePosition.y > maxY) {
          maxY = nodePosition.y
        }
      }
    })

    return {
      x: minX !== Infinity ? minX : position.x + dx,
      y: maxY !== -Infinity ? maxY + dy : position.y,
    }
  }
}

