/*
 * @Description: x6扩展安装
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-28 10:04:45
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2024-12-28 17:39:38
 */
import { Graph } from "@antv/x6"
import { Snapline } from "@antv/x6-plugin-snapline"
import { History } from "@antv/x6-plugin-history"
import { Clipboard } from "@antv/x6-plugin-clipboard"
import { Selection } from "@antv/x6-plugin-selection"
import { Keyboard } from "@antv/x6-plugin-keyboard"
import { Transform } from "@antv/x6-plugin-transform"
import { Scroller } from "@antv/x6-plugin-scroller"

export default class UsePlugins {
  private blf: Graph

  constructor(blf: Graph) {
    this.blf = blf

    this.install()
    this.initShortCuts()
  }

  /**
   * 安装插件
   */
  install(): void {
    this.blf
      .use(
        new Snapline({
          enabled: true,
          resizing: true,
          sharp: true,
        })
      )
      .use(new History({ enabled: true }))
      .use(new Clipboard({ enabled: true }))
      .use(
        new Selection({
          enabled: true,
          multiple: true,
          rubberband: true,
          movable: true,
          showNodeSelectionBox: true,
          showEdgeSelectionBox: true,
          content: d => {
            return `当前选中了${d.boxCount}个节点`
          },
        })
      )
      .use(
        new Keyboard({
          enabled: true,
          global: true,
        })
      )
      .use(
        new Transform({
          resizing: {
            enabled: true,
            minWidth: 1,
            maxWidth: 200,
            minHeight: 1,
            maxHeight: 150,
            orthogonal: true,
            restrict: false,
            preserveAspectRatio: false,
            allowReverse: false,
          },
        })
      )
      .use(
        new Scroller({
          enabled: true,
        })
      )
  }
  /**
   * 初始化快捷键
   */
  initShortCuts(): void {
    // win+mac 复制
    this.blf.bindKey(["ctrl+c", "command+c"], () => {
      const cells = this.blf.getSelectedCells()
      if (cells.length) {
        this.blf.copy(cells)
      }
      return false
    })
    // win+mac 粘贴
    this.blf.bindKey(["ctrl+v", "command+v"], () => {
      if (!this.blf.isClipboardEmpty()) {
        const cells = this.blf.paste({ offset: 32 })
        this.blf.cleanSelection()
        this.blf.select(cells)
      }
      return false
    })

    // win+mac 回退
    this.blf.bindKey(["ctrl+z", "command+z"], () => {
      this.blf.undo()
    })

    // win+mac 重做
    this.blf.bindKey(["shift+ctrl+z", "shift+command+z"], () => {
      this.blf.redo()
    })
  }
}

