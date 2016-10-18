/**
 * Created by lianghongpeng on 2016/10/17.
 */

import parse from 'co-body';

/**
 * 默认首页
 */
export function* index() {
  this.body = {
    status: true,
    code: 200
  };
}

export function* webhook() {

  const text = yield parse.text(this);

  console.log(text);
  console.log(this.headers);

  this.body = {
    status: true,
    code: 200,
    data: text
  };
}
