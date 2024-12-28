/*
 * @Description: 基于antv/x6的逻辑编排图
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-28 09:06:33
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2024-12-28 16:57:33
 */
import { Graph } from "@antv/x6"
import UsePlugins from "./plugins/x6-plugin"
import BtpStencil from "./plugins/x6-plugin/stencil"

export default class BtpLogicFlow {
  private container: HTMLDivElement
  private stencilContainer: HTMLDivElement

  private defaultOptions: Object = {
    autoResize: true,
    background: {
      color: "#F2F7FA",
    },
    grid: {
      visible: true,
      type: "mesh",
      size: 16,
      args: {
        color: "#ddd", // 网格线颜色
        thickness: 1, // 网格线宽度
      },
    },
    mousewheel: {
      enabled: false, // 开启缩放会和scroll插件冲突
      minScale: 1,
      maxScale: 2,
    },
  }
  private data: Object
  public blf: Graph

  constructor(options, data: Object) {
    let { container, stencilContainer } = options
    this.container = container
    this.stencilContainer = stencilContainer
    this.data = data

    this.initGraph({ ...this.defaultOptions, ...options })
    this.initStencil({ container: this.stencilContainer, target: this.blf })
  }
  /**
   * 初始化画布
   * @param options 扩展项
   */
  initGraph(options): void {
    console.log("--------------initGraph-start--------------")
    this.blf = new Graph(options)
    this.fromJSON(this.data)
    this.usePlugins(this.blf)
    console.log("--------------initGraph-end----------------")
  }
  initStencil(options): void {
    console.log("--------------initStencil-start--------------")
    new BtpStencil(options)
    console.log("--------------initStencil-end----------------")
  }

  /**
   * 监听画布事件
   */
  //   TODO
  on(): void {}

  /**
   * 安装插件
   * @param blf 实例
   */
  usePlugins(blf: Graph) {
    console.log("--------------usePlugins-start--------------")
    new UsePlugins(blf)
    console.log("--------------usePlugins-end----------------")
  }

  /**
   * 渲染数据
   * @param data
   */
  fromJSON(data: Object) {
    console.log("--------------fromJSON-start--------------")
    this.blf.fromJSON(data)
    console.log("--------------fromJSON-end----------------")
  }

  toJSON(options): Object {
    console.log("--------------toJSON--------------")
    return this.blf.toJSON(options)
  }
}

