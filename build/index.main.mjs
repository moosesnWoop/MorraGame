// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Evens(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Evens expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Evens expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v529, v530], secs: v532, time: v531, didSend: v73, from: v528 } = txn1;
  ;
  const v541 = stdlib.safeAdd(v531, v530);
  stdlib.protect(ctc1, await interact.acceptWager(v529), {
    at: './index.rsh:95:29:application',
    fs: ['at ./index.rsh:94:19:application call to [unknown function] (defined at: ./index.rsh:94:22:function exp)'],
    msg: 'acceptWager',
    who: 'Evens'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v528, v529, v530, v541],
    evt_cnt: 0,
    funcNum: 1,
    lct: v531,
    onlyIf: true,
    out_tys: [],
    pay: [v529, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v547, time: v546, didSend: v82, from: v545 } = txn2;
      
      const v549 = stdlib.add(v529, v529);
      sim_r.txns.push({
        amt: v529,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v550 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v551 = v546;
      const v558 = v549;
      
      if (await (async () => {
        const v566 = stdlib.eq(v550, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v566;})()) {
        const v573 = stdlib.safeAdd(v551, v530);
        sim_r.isHalt = false;
        }
      else {
        const v831 = stdlib.eq(v550, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v834 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:191:14:decimal', stdlib.UInt_max, '2'), v529);
        const v836 = v831 ? v528 : v545;
        sim_r.txns.push({
          kind: 'from',
          to: v836,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v541],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v528, v529, v530, v541],
      evt_cnt: 0,
      funcNum: 2,
      lct: v531,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v849, time: v848, didSend: v469, from: v847 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v528,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v849, time: v848, didSend: v469, from: v847 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.timeoutNotice(), {
      at: './index.rsh:72:35:application',
      fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:98:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'timeoutNotice',
      who: 'Evens'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v547, time: v546, didSend: v82, from: v545 } = txn2;
    const v549 = stdlib.add(v529, v529);
    ;
    let v550 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v551 = v546;
    let v558 = v549;
    
    let txn3 = txn2;
    while (await (async () => {
      const v566 = stdlib.eq(v550, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v566;})()) {
      const v573 = stdlib.safeAdd(v551, v530);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v573],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v528, v529, v530, v545, v558, v573],
          evt_cnt: 0,
          funcNum: 5,
          lct: v551,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v815, time: v814, didSend: v420, from: v813 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v545,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v815, time: v814, didSend: v420, from: v813 } = txn5;
        ;
        const v816 = stdlib.addressEq(v545, v813);
        const v817 = stdlib.addressEq(v528, v813);
        const v818 = v816 ? true : v817;
        stdlib.assert(v818, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:116:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Evens'
          });
        ;
        stdlib.protect(ctc1, await interact.timeoutNotice(), {
          at: './index.rsh:72:35:application',
          fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:116:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'timeoutNotice',
          who: 'Evens'
          });
        
        return;
        
        }
      else {
        const {data: [v586], secs: v588, time: v587, didSend: v113, from: v585 } = txn4;
        ;
        const v589 = stdlib.addressEq(v528, v585);
        stdlib.assert(v589, {
          at: './index.rsh:115:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Evens'
          });
        const v596 = stdlib.safeAdd(v587, v530);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v596],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v528, v529, v530, v545, v558, v586, v596],
            evt_cnt: 0,
            funcNum: 7,
            lct: v587,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v797, time: v796, didSend: v386, from: v795 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v545,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v797, time: v796, didSend: v386, from: v795 } = txn6;
          ;
          const v798 = stdlib.addressEq(v545, v795);
          const v799 = stdlib.addressEq(v528, v795);
          const v800 = v798 ? true : v799;
          stdlib.assert(v800, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:119:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Evens'
            });
          ;
          stdlib.protect(ctc1, await interact.timeoutNotice(), {
            at: './index.rsh:72:35:application',
            fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:119:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'timeoutNotice',
            who: 'Evens'
            });
          
          return;
          
          }
        else {
          const {data: [v599], secs: v601, time: v600, didSend: v119, from: v598 } = txn5;
          ;
          const v602 = stdlib.addressEq(v528, v598);
          stdlib.assert(v602, {
            at: './index.rsh:118:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Evens'
            });
          const v609 = stdlib.safeAdd(v600, v530);
          const v613 = stdlib.protect(ctc0, await interact.getHand(), {
            at: './index.rsh:127:45:application',
            fs: ['at ./index.rsh:125:23:application call to [unknown function] (defined at: ./index.rsh:125:27:function exp)'],
            msg: 'getHand',
            who: 'Evens'
            });
          const v614 = stdlib.protect(ctc0, await interact.getGuess(v613), {
            at: './index.rsh:128:47:application',
            fs: ['at ./index.rsh:125:23:application call to [unknown function] (defined at: ./index.rsh:125:27:function exp)'],
            msg: 'getGuess',
            who: 'Evens'
            });
          const v615 = stdlib.protect(ctc0, await interact.random(), {
            at: 'reach standard library:64:31:application',
            fs: ['at ./index.rsh:130:55:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:125:23:application call to [unknown function] (defined at: ./index.rsh:125:27:function exp)'],
            msg: 'random',
            who: 'Evens'
            });
          const v616 = stdlib.digest([ctc0, ctc0], [v615, v613]);
          const v618 = stdlib.protect(ctc0, await interact.random(), {
            at: 'reach standard library:64:31:application',
            fs: ['at ./index.rsh:131:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:125:23:application call to [unknown function] (defined at: ./index.rsh:125:27:function exp)'],
            msg: 'random',
            who: 'Evens'
            });
          const v619 = stdlib.digest([ctc0, ctc0], [v618, v614]);
          
          const txn6 = await (ctc.sendrecv({
            args: [v528, v529, v530, v545, v558, v586, v599, v609, v616],
            evt_cnt: 1,
            funcNum: 8,
            lct: v600,
            onlyIf: true,
            out_tys: [ctc2],
            pay: [stdlib.checkedBigNumberify('./index.rsh:137:19:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v622], secs: v624, time: v623, didSend: v138, from: v621 } = txn6;
              
              ;
              const v632 = stdlib.safeAdd(v623, v530);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v609],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc2],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v528, v529, v530, v545, v558, v586, v599, v609],
              evt_cnt: 0,
              funcNum: 9,
              lct: v600,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v779, time: v778, didSend: v352, from: v777 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v528,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v779, time: v778, didSend: v352, from: v777 } = txn7;
            ;
            const v780 = stdlib.addressEq(v545, v777);
            const v781 = stdlib.addressEq(v528, v777);
            const v782 = v780 ? true : v781;
            stdlib.assert(v782, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:138:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Evens'
              });
            ;
            stdlib.protect(ctc1, await interact.timeoutNotice(), {
              at: './index.rsh:72:35:application',
              fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:138:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'timeoutNotice',
              who: 'Evens'
              });
            
            return;
            
            }
          else {
            const {data: [v622], secs: v624, time: v623, didSend: v138, from: v621 } = txn6;
            ;
            const v625 = stdlib.addressEq(v545, v621);
            stdlib.assert(v625, {
              at: './index.rsh:137:19:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Evens'
              });
            const v632 = stdlib.safeAdd(v623, v530);
            const txn7 = await (ctc.sendrecv({
              args: [v528, v529, v530, v545, v558, v586, v599, v622, v632, v619],
              evt_cnt: 1,
              funcNum: 10,
              lct: v623,
              onlyIf: true,
              out_tys: [ctc2],
              pay: [stdlib.checkedBigNumberify('./index.rsh:141:19:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v635], secs: v637, time: v636, didSend: v144, from: v634 } = txn7;
                
                ;
                const v645 = stdlib.safeAdd(v636, v530);
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v632],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc2, ctc0, ctc2],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v528, v529, v530, v545, v558, v586, v599, v622, v632],
                evt_cnt: 0,
                funcNum: 11,
                lct: v623,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v761, time: v760, didSend: v318, from: v759 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v528,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc2, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v761, time: v760, didSend: v318, from: v759 } = txn8;
              ;
              const v762 = stdlib.addressEq(v545, v759);
              const v763 = stdlib.addressEq(v528, v759);
              const v764 = v762 ? true : v763;
              stdlib.assert(v764, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:142:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Evens'
                });
              ;
              stdlib.protect(ctc1, await interact.timeoutNotice(), {
                at: './index.rsh:72:35:application',
                fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:142:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'timeoutNotice',
                who: 'Evens'
                });
              
              return;
              
              }
            else {
              const {data: [v635], secs: v637, time: v636, didSend: v144, from: v634 } = txn7;
              ;
              const v638 = stdlib.addressEq(v545, v634);
              stdlib.assert(v638, {
                at: './index.rsh:141:19:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Evens'
                });
              const v645 = stdlib.safeAdd(v636, v530);
              const txn8 = await (ctc.recv({
                didSend: false,
                evt_cnt: 4,
                funcNum: 12,
                out_tys: [ctc0, ctc0, ctc0, ctc0],
                timeoutAt: ['time', v645],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v528, v529, v530, v545, v558, v586, v599, v622, v635, v645],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v636,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v743, time: v742, didSend: v284, from: v741 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v545,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc2, ctc2, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v743, time: v742, didSend: v284, from: v741 } = txn9;
                ;
                const v744 = stdlib.addressEq(v545, v741);
                const v745 = stdlib.addressEq(v528, v741);
                const v746 = v744 ? true : v745;
                stdlib.assert(v746, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:157:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Evens'
                  });
                ;
                stdlib.protect(ctc1, await interact.timeoutNotice(), {
                  at: './index.rsh:72:35:application',
                  fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:157:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'timeoutNotice',
                  who: 'Evens'
                  });
                
                return;
                
                }
              else {
                const {data: [v650, v651, v652, v653], secs: v655, time: v654, didSend: v156, from: v649 } = txn8;
                ;
                const v656 = stdlib.addressEq(v528, v649);
                stdlib.assert(v656, {
                  at: './index.rsh:156:19:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Evens'
                  });
                const v657 = stdlib.digest([ctc0, ctc0], [v650, v651]);
                const v658 = stdlib.digestEq(v586, v657);
                stdlib.assert(v658, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:159:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Evens'
                  });
                const v659 = stdlib.digest([ctc0, ctc0], [v652, v653]);
                const v660 = stdlib.digestEq(v599, v659);
                stdlib.assert(v660, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:160:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Evens'
                  });
                const v667 = stdlib.safeAdd(v654, v530);
                const txn9 = await (ctc.sendrecv({
                  args: [v528, v529, v530, v545, v558, v622, v635, v651, v653, v667, v615, v613, v618, v614],
                  evt_cnt: 4,
                  funcNum: 14,
                  lct: v654,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0, ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:170:19:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v672, v673, v674, v675], secs: v677, time: v676, didSend: v174, from: v671 } = txn9;
                    
                    ;
                    const v689 = stdlib.safeAdd(v676, v530);
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v667],
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v528, v529, v530, v545, v558, v622, v635, v651, v653, v667],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v654,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v725, time: v724, didSend: v250, from: v723 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v528,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v725, time: v724, didSend: v250, from: v723 } = txn10;
                  ;
                  const v726 = stdlib.addressEq(v545, v723);
                  const v727 = stdlib.addressEq(v528, v723);
                  const v728 = v726 ? true : v727;
                  stdlib.assert(v728, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:171:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Evens'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.timeoutNotice(), {
                    at: './index.rsh:72:35:application',
                    fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:171:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'timeoutNotice',
                    who: 'Evens'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v672, v673, v674, v675], secs: v677, time: v676, didSend: v174, from: v671 } = txn9;
                  ;
                  const v678 = stdlib.addressEq(v545, v671);
                  stdlib.assert(v678, {
                    at: './index.rsh:170:19:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Evens'
                    });
                  const v679 = stdlib.digest([ctc0, ctc0], [v672, v673]);
                  const v680 = stdlib.digestEq(v622, v679);
                  stdlib.assert(v680, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:172:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Evens'
                    });
                  const v681 = stdlib.digest([ctc0, ctc0], [v674, v675]);
                  const v682 = stdlib.digestEq(v635, v681);
                  stdlib.assert(v682, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:173:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Evens'
                    });
                  const v689 = stdlib.safeAdd(v676, v530);
                  const txn10 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v689],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v528, v529, v530, v545, v558, v651, v653, v673, v675, v689],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v676,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v707, time: v706, didSend: v216, from: v705 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v545,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v707, time: v706, didSend: v216, from: v705 } = txn11;
                    ;
                    const v708 = stdlib.addressEq(v545, v705);
                    const v709 = stdlib.addressEq(v528, v705);
                    const v710 = v708 ? true : v709;
                    stdlib.assert(v710, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:182:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Evens'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.timeoutNotice(), {
                      at: './index.rsh:72:35:application',
                      fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:182:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'timeoutNotice',
                      who: 'Evens'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v695], secs: v697, time: v696, didSend: v190, from: v694 } = txn10;
                    ;
                    const v698 = stdlib.addressEq(v528, v694);
                    stdlib.assert(v698, {
                      at: './index.rsh:181:19:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Evens'
                      });
                    let v699;
                    const v700 = stdlib.eq(v653, v675);
                    if (v700) {
                      v699 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v701 = stdlib.safeAdd(v651, v673);
                      const v702 = stdlib.eq(v701, v653);
                      const v704 = stdlib.eq(v701, v675);
                      const v864 = v704 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      const v865 = v702 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v864;
                      v699 = v865;
                      }
                    const cv550 = v699;
                    const cv551 = v696;
                    const cv558 = v558;
                    
                    v550 = cv550;
                    v551 = cv551;
                    v558 = cv558;
                    
                    txn3 = txn10;
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v831 = stdlib.eq(v550, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v834 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:191:14:decimal', stdlib.UInt_max, '2'), v529);
    const v836 = v831 ? v528 : v545;
    ;
    stdlib.protect(ctc1, await interact.endGameNotice(), {
      at: './index.rsh:195:31:application',
      fs: ['at ./index.rsh:194:9:application call to [unknown function] (defined at: ./index.rsh:194:36:function exp)'],
      msg: 'endGameNotice',
      who: 'Evens'
      });
    
    return;
    }
  
  
  
  };
export async function Odds(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Odds expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Odds expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v524 = stdlib.protect(ctc0, interact.deadline, 'for Odds\'s interact field deadline');
  const v525 = stdlib.protect(ctc0, interact.wager, 'for Odds\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v525, v524],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:90:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v525, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v529, v530], secs: v532, time: v531, didSend: v73, from: v528 } = txn1;
      
      sim_r.txns.push({
        amt: v529,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v541 = stdlib.safeAdd(v531, v530);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v529, v530], secs: v532, time: v531, didSend: v73, from: v528 } = txn1;
  ;
  const v541 = stdlib.safeAdd(v531, v530);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v541],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v528, v529, v530, v541],
      evt_cnt: 0,
      funcNum: 2,
      lct: v531,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v849, time: v848, didSend: v469, from: v847 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v528,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v849, time: v848, didSend: v469, from: v847 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.timeoutNotice(), {
      at: './index.rsh:72:35:application',
      fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:98:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'timeoutNotice',
      who: 'Odds'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v547, time: v546, didSend: v82, from: v545 } = txn2;
    const v549 = stdlib.add(v529, v529);
    ;
    let v550 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v551 = v546;
    let v558 = v549;
    
    let txn3 = txn2;
    while (await (async () => {
      const v566 = stdlib.eq(v550, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v566;})()) {
      const v573 = stdlib.safeAdd(v551, v530);
      const v577 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:106:45:application',
        fs: ['at ./index.rsh:105:23:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)'],
        msg: 'getHand',
        who: 'Odds'
        });
      const v578 = stdlib.protect(ctc0, await interact.getGuess(v577), {
        at: './index.rsh:107:47:application',
        fs: ['at ./index.rsh:105:23:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)'],
        msg: 'getGuess',
        who: 'Odds'
        });
      const v579 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:109:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:105:23:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)'],
        msg: 'random',
        who: 'Odds'
        });
      const v580 = stdlib.digest([ctc0, ctc0], [v579, v577]);
      const v582 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:111:59:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:105:23:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)'],
        msg: 'random',
        who: 'Odds'
        });
      const v583 = stdlib.digest([ctc0, ctc0], [v582, v578]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v528, v529, v530, v545, v558, v573, v580],
        evt_cnt: 1,
        funcNum: 4,
        lct: v551,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:115:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v586], secs: v588, time: v587, didSend: v113, from: v585 } = txn4;
          
          ;
          const v596 = stdlib.safeAdd(v587, v530);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v573],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v528, v529, v530, v545, v558, v573],
          evt_cnt: 0,
          funcNum: 5,
          lct: v551,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v815, time: v814, didSend: v420, from: v813 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v545,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v815, time: v814, didSend: v420, from: v813 } = txn5;
        ;
        const v816 = stdlib.addressEq(v545, v813);
        const v817 = stdlib.addressEq(v528, v813);
        const v818 = v816 ? true : v817;
        stdlib.assert(v818, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:116:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Odds'
          });
        ;
        stdlib.protect(ctc2, await interact.timeoutNotice(), {
          at: './index.rsh:72:35:application',
          fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:116:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'timeoutNotice',
          who: 'Odds'
          });
        
        return;
        
        }
      else {
        const {data: [v586], secs: v588, time: v587, didSend: v113, from: v585 } = txn4;
        ;
        const v589 = stdlib.addressEq(v528, v585);
        stdlib.assert(v589, {
          at: './index.rsh:115:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Odds'
          });
        const v596 = stdlib.safeAdd(v587, v530);
        const txn5 = await (ctc.sendrecv({
          args: [v528, v529, v530, v545, v558, v586, v596, v583],
          evt_cnt: 1,
          funcNum: 6,
          lct: v587,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:118:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v599], secs: v601, time: v600, didSend: v119, from: v598 } = txn5;
            
            ;
            const v609 = stdlib.safeAdd(v600, v530);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v596],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v528, v529, v530, v545, v558, v586, v596],
            evt_cnt: 0,
            funcNum: 7,
            lct: v587,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v797, time: v796, didSend: v386, from: v795 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v545,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v797, time: v796, didSend: v386, from: v795 } = txn6;
          ;
          const v798 = stdlib.addressEq(v545, v795);
          const v799 = stdlib.addressEq(v528, v795);
          const v800 = v798 ? true : v799;
          stdlib.assert(v800, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:119:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Odds'
            });
          ;
          stdlib.protect(ctc2, await interact.timeoutNotice(), {
            at: './index.rsh:72:35:application',
            fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:119:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'timeoutNotice',
            who: 'Odds'
            });
          
          return;
          
          }
        else {
          const {data: [v599], secs: v601, time: v600, didSend: v119, from: v598 } = txn5;
          ;
          const v602 = stdlib.addressEq(v528, v598);
          stdlib.assert(v602, {
            at: './index.rsh:118:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Odds'
            });
          const v609 = stdlib.safeAdd(v600, v530);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc1],
            timeoutAt: ['time', v609],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v528, v529, v530, v545, v558, v586, v599, v609],
              evt_cnt: 0,
              funcNum: 9,
              lct: v600,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v779, time: v778, didSend: v352, from: v777 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v528,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v779, time: v778, didSend: v352, from: v777 } = txn7;
            ;
            const v780 = stdlib.addressEq(v545, v777);
            const v781 = stdlib.addressEq(v528, v777);
            const v782 = v780 ? true : v781;
            stdlib.assert(v782, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:138:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Odds'
              });
            ;
            stdlib.protect(ctc2, await interact.timeoutNotice(), {
              at: './index.rsh:72:35:application',
              fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:138:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'timeoutNotice',
              who: 'Odds'
              });
            
            return;
            
            }
          else {
            const {data: [v622], secs: v624, time: v623, didSend: v138, from: v621 } = txn6;
            ;
            const v625 = stdlib.addressEq(v545, v621);
            stdlib.assert(v625, {
              at: './index.rsh:137:19:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Odds'
              });
            const v632 = stdlib.safeAdd(v623, v530);
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc1],
              timeoutAt: ['time', v632],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v528, v529, v530, v545, v558, v586, v599, v622, v632],
                evt_cnt: 0,
                funcNum: 11,
                lct: v623,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v761, time: v760, didSend: v318, from: v759 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v528,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc1, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v761, time: v760, didSend: v318, from: v759 } = txn8;
              ;
              const v762 = stdlib.addressEq(v545, v759);
              const v763 = stdlib.addressEq(v528, v759);
              const v764 = v762 ? true : v763;
              stdlib.assert(v764, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:142:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Odds'
                });
              ;
              stdlib.protect(ctc2, await interact.timeoutNotice(), {
                at: './index.rsh:72:35:application',
                fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:142:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'timeoutNotice',
                who: 'Odds'
                });
              
              return;
              
              }
            else {
              const {data: [v635], secs: v637, time: v636, didSend: v144, from: v634 } = txn7;
              ;
              const v638 = stdlib.addressEq(v545, v634);
              stdlib.assert(v638, {
                at: './index.rsh:141:19:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Odds'
                });
              const v645 = stdlib.safeAdd(v636, v530);
              const txn8 = await (ctc.sendrecv({
                args: [v528, v529, v530, v545, v558, v586, v599, v622, v635, v645, v579, v577, v582, v578],
                evt_cnt: 4,
                funcNum: 12,
                lct: v636,
                onlyIf: true,
                out_tys: [ctc0, ctc0, ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:156:19:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v650, v651, v652, v653], secs: v655, time: v654, didSend: v156, from: v649 } = txn8;
                  
                  ;
                  const v667 = stdlib.safeAdd(v654, v530);
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v645],
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v528, v529, v530, v545, v558, v586, v599, v622, v635, v645],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v636,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v743, time: v742, didSend: v284, from: v741 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v545,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v743, time: v742, didSend: v284, from: v741 } = txn9;
                ;
                const v744 = stdlib.addressEq(v545, v741);
                const v745 = stdlib.addressEq(v528, v741);
                const v746 = v744 ? true : v745;
                stdlib.assert(v746, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:157:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Odds'
                  });
                ;
                stdlib.protect(ctc2, await interact.timeoutNotice(), {
                  at: './index.rsh:72:35:application',
                  fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:157:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'timeoutNotice',
                  who: 'Odds'
                  });
                
                return;
                
                }
              else {
                const {data: [v650, v651, v652, v653], secs: v655, time: v654, didSend: v156, from: v649 } = txn8;
                ;
                const v656 = stdlib.addressEq(v528, v649);
                stdlib.assert(v656, {
                  at: './index.rsh:156:19:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Odds'
                  });
                const v657 = stdlib.digest([ctc0, ctc0], [v650, v651]);
                const v658 = stdlib.digestEq(v586, v657);
                stdlib.assert(v658, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:159:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Odds'
                  });
                const v659 = stdlib.digest([ctc0, ctc0], [v652, v653]);
                const v660 = stdlib.digestEq(v599, v659);
                stdlib.assert(v660, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:160:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Odds'
                  });
                const v667 = stdlib.safeAdd(v654, v530);
                const txn9 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 4,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0, ctc0, ctc0],
                  timeoutAt: ['time', v667],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v528, v529, v530, v545, v558, v622, v635, v651, v653, v667],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v654,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v725, time: v724, didSend: v250, from: v723 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v528,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v725, time: v724, didSend: v250, from: v723 } = txn10;
                  ;
                  const v726 = stdlib.addressEq(v545, v723);
                  const v727 = stdlib.addressEq(v528, v723);
                  const v728 = v726 ? true : v727;
                  stdlib.assert(v728, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:171:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Odds'
                    });
                  ;
                  stdlib.protect(ctc2, await interact.timeoutNotice(), {
                    at: './index.rsh:72:35:application',
                    fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:171:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'timeoutNotice',
                    who: 'Odds'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v672, v673, v674, v675], secs: v677, time: v676, didSend: v174, from: v671 } = txn9;
                  ;
                  const v678 = stdlib.addressEq(v545, v671);
                  stdlib.assert(v678, {
                    at: './index.rsh:170:19:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Odds'
                    });
                  const v679 = stdlib.digest([ctc0, ctc0], [v672, v673]);
                  const v680 = stdlib.digestEq(v622, v679);
                  stdlib.assert(v680, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:172:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Odds'
                    });
                  const v681 = stdlib.digest([ctc0, ctc0], [v674, v675]);
                  const v682 = stdlib.digestEq(v635, v681);
                  stdlib.assert(v682, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:173:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Odds'
                    });
                  const v689 = stdlib.safeAdd(v676, v530);
                  const v693 = stdlib.safeAdd(v651, v673);
                  stdlib.protect(ctc2, await interact.getOutcome(v693), {
                    at: './index.rsh:178:32:application',
                    fs: ['at ./index.rsh:176:23:application call to [unknown function] (defined at: ./index.rsh:176:26:function exp)'],
                    msg: 'getOutcome',
                    who: 'Odds'
                    });
                  
                  const txn10 = await (ctc.sendrecv({
                    args: [v528, v529, v530, v545, v558, v651, v653, v673, v675, v689, v693],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v676,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:181:19:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v695], secs: v697, time: v696, didSend: v190, from: v694 } = txn10;
                      
                      ;
                      let v699;
                      const v700 = stdlib.eq(v653, v675);
                      if (v700) {
                        v699 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v701 = stdlib.safeAdd(v651, v673);
                        const v702 = stdlib.eq(v701, v653);
                        const v704 = stdlib.eq(v701, v675);
                        const v864 = v704 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        const v865 = v702 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v864;
                        v699 = v865;
                        }
                      const cv550 = v699;
                      const cv551 = v696;
                      const cv558 = v558;
                      
                      await (async () => {
                        const v550 = cv550;
                        const v551 = cv551;
                        const v558 = cv558;
                        
                        if (await (async () => {
                          const v566 = stdlib.eq(v550, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                          
                          return v566;})()) {
                          const v573 = stdlib.safeAdd(v551, v530);
                          sim_r.isHalt = false;
                          }
                        else {
                          const v831 = stdlib.eq(v550, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                          const v834 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:191:14:decimal', stdlib.UInt_max, '2'), v529);
                          const v836 = v831 ? v528 : v545;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v836,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v689],
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v528, v529, v530, v545, v558, v651, v653, v673, v675, v689],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v676,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v707, time: v706, didSend: v216, from: v705 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v545,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v707, time: v706, didSend: v216, from: v705 } = txn11;
                    ;
                    const v708 = stdlib.addressEq(v545, v705);
                    const v709 = stdlib.addressEq(v528, v705);
                    const v710 = v708 ? true : v709;
                    stdlib.assert(v710, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:182:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Odds'
                      });
                    ;
                    stdlib.protect(ctc2, await interact.timeoutNotice(), {
                      at: './index.rsh:72:35:application',
                      fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:70:30:function exp)', 'at ./index.rsh:182:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'timeoutNotice',
                      who: 'Odds'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v695], secs: v697, time: v696, didSend: v190, from: v694 } = txn10;
                    ;
                    const v698 = stdlib.addressEq(v528, v694);
                    stdlib.assert(v698, {
                      at: './index.rsh:181:19:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Odds'
                      });
                    let v699;
                    const v700 = stdlib.eq(v653, v675);
                    if (v700) {
                      v699 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v701 = stdlib.safeAdd(v651, v673);
                      const v702 = stdlib.eq(v701, v653);
                      const v704 = stdlib.eq(v701, v675);
                      const v864 = v704 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      const v865 = v702 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v864;
                      v699 = v865;
                      }
                    const cv550 = v699;
                    const cv551 = v696;
                    const cv558 = v558;
                    
                    v550 = cv550;
                    v551 = cv551;
                    v558 = cv558;
                    
                    txn3 = txn10;
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v831 = stdlib.eq(v550, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v834 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:191:14:decimal', stdlib.UInt_max, '2'), v529);
    const v836 = v831 ? v528 : v545;
    ;
    stdlib.protect(ctc2, await interact.endGameNotice(), {
      at: './index.rsh:195:31:application',
      fs: ['at ./index.rsh:194:9:application call to [unknown function] (defined at: ./index.rsh:194:36:function exp)'],
      msg: 'endGameNotice',
      who: 'Odds'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAXAAFQICgIEQIFCQ0PeAsHEFiYAagBGNgBuAEwJgMBAAEBACI1ADEYQQkkKmRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khCQxABNJJIQoMQAKNSSELDEABSkkhDwxAAPBJIQYMQABWIQYSRCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEAIHSjrAyBjQDIQxbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCCDNIIQY0ARJENARJIhJMNAISEUQoZClkUEk1A0lJVwAgNf+BYFs1/oFwWzX9STUFFzX8gAR+hRBxNPwWULAyBjQDIQxbDEQ0/zEAEkQ0/jT9EkEABiM1+0IAHzQDIRBbNAOBaFsINfojIjT6NP0STSEHNPo0/hJNNfs0/zQDJVs0AyEEWzQDVzAgNPsyBjQDJFtCBz5IIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gARGR4xesDIGNAMhElsPRDQDVzAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IHTUmBDgxAAOJIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yVbNf4hBFs1/VcwIDX8JFs1+yERWzX6gaABWzX5STUFSUoiWzX4IQVbNfchD1s19iETWzX1gASw0FGLNPgWUDT3FlA09hZQNPUWULAyBjQDIRJbDEQ0/DEAEkQ0A1dYIDT4FjT3FlABEkQ0A1d4IDT2FjT1FlABEkQyBjT9CDX0NP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT3FlA09RZQNPQWUChLAVcAf2cpSwFXfwFnSCEGNQEyBjUCQgaASCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEIp+XA7AyBjQDIRRbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCBhFJIQ0MQAE5SYEMDEAA30ghCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7V5ggNfpXuCA1+Uk1BUlKIls1+CEFWzX3IQ9bNfYhE1s19YAEsCuazzT4FlA09xZQNPYWUDT1FlCwMgY0AyEUWwxENP8xABJENANXWCA0+BY09xZQARJENANXeCA09hY09RZQARJEMgY0/Qg19DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPcWUDT1FlA09BZQKEsBVwB/ZylLAVd/MWdIIQs1ATIGNQJCBUBIIQ00ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATj2TY1sDIGNAMhFVsPRDQDVzAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IE0UmBCgxAAKRIIQ00ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6V3ggNflXmCA1+Ek1BTX3gAQarAnfNPdQsDIGNAMhFVsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4UDT3UDT2FlAoSwFXAH9nKUsBV39hZ0ghCjUBMgY1AkIEQkghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKIFZo6wMgY0AyERWw9ENANXMCAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgPTSSEIDEAB50khDgxAAPZJIQUMQACcSCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXWCA1+ld4IDX5STUFNfiABL+HXWU0+FCwMgY0AyERWwxENPwxABJEMgY0/Qg19zT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPhQNPcWUChLAVcAf2cpSwFXf0FnSCENNQEyBjUCQgM+SCEONAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AE4huzqbAyBjQDIQxbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAs9JgQYMQACTSCEONAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6STUFNfmABGnuOz40+VCwMgY0AyEMWwxENP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCEJNQEyBjUCQgJRSCEINAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIRBbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAeVJIQcMQADPSYEEDEAAiEghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftJNQU1+oAEOLAjLTT6ULAyBjQDIRBbDEQ0/zEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQKEsBVwB/ZylLAVd/AWdIIQ41ATIGNQJCAWshBxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEWWw9EsSKyATQDJVuyCCOyEDQDVwAgsgezQgEPSSMMQABHSCM0ARJENARJIhJMNAISEUQoZEk1AyVbNf+ABJqLkXSwMgY0AyEWWwxENP+IAUg0A1cAIDT/NAMhBFsxACMyBjT/SQhCAGBIgaCNBogBKCI0ARJENARJIhJMNAISEURJNQVJIls1/yEFWzX+gASs0R/DNP8WUDT+FlCwNP+IAPcyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAH41/zX+Nf01/DX7Nfo1+TT9IxJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghCDUBMgY1AkIAOrEisgEhBzT6C7III7IQNPw0+TT9IQcSTbIHs0IAADEZIQgSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 224,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v529",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v530",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v529",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v530",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v635",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v650",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v651",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v652",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v653",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v672",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v673",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v674",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v675",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v695",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v586",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v599",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v622",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v635",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v650",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v651",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v652",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v653",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v672",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v673",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v674",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v675",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v695",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v586",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v599",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v622",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002fac38038062002fac8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b612c2f806200037d6000396000f3fe60806040526004361061010c5760003560e01c80638b9fadc81161009a578063ab53f2c611610061578063ab53f2c614610232578063b608682e14610255578063bf2c5b2414610268578063de7369981461027b578063f37e1b9b1461028e57005b80638b9fadc8146101d35780638e314769146101e6578063980b6eac146101f95780639f2518101461020c578063a209ad4e1461021f57005b80633a31ddbd116100de5780633a31ddbd146101725780635471c5a81461018557806367b24ad6146101985780637eea518c146101ab57806383230757146101be57005b80631e93b0f11461011557806320db86d61461013957806329bdceb91461014c5780632c10a1591461015f57005b3661011357005b005b34801561012157600080fd5b506003545b6040519081526020015b60405180910390f35b61011361014736600461255b565b6102a1565b61011361015a366004612590565b610599565b61011361016d366004612590565b610829565b610113610180366004612590565b6109b8565b610113610193366004612590565b610b6b565b6101136101a636600461255b565b610d07565b6101136101b9366004612590565b610fd7565b3480156101ca57600080fd5b50600154610126565b6101136101e1366004612590565b61113a565b6101136101f4366004612590565b611295565b610113610207366004612590565b6113ef565b61011361021a366004612590565b611661565b61011361022d366004612590565b6117bc565b34801561023e57600080fd5b506102476119ff565b6040516101309291906125ac565b610113610263366004612590565b611a9c565b610113610276366004612590565b611cd8565b610113610289366004612590565b611e32565b61011361029c366004612590565b611f8c565b6102b1600d60005414603c6121b5565b6102cb813515806102c457506001548235145b603d6121b5565b6000808055600280546102dd90612609565b80601f016020809104026020016040519081016040528092919081815260200182805461030990612609565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e9190612757565b90506103866040518060200160405280600081525090565b6103988261012001514310603e6121b5565b7f35b5833f615c330677ac8f0303975e37c61e7b599a6e3b948f450f164578a70c33846040516103c9929190612774565b60405180910390a16103dd341560386121b5565b81516103f5906001600160a01b0316331460396121b5565b604080516104419161041b91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114603a6121b5565b60408051606085810135602083015260808601359282019290925261048791016040516020818303038152906040528051906020012060001c8360c0015114603b6121b5565b6104954383604001516121db565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601518185015260e08087015160a08601526101008088015160c0870152888501359186019190915290870135908401528351610120840152600f60005543600155905161056e91839101612837565b60405160208183030381529060405260029080519060200190610592929190612414565b5050505050565b6105a960096000541460266121b5565b6105c3813515806105bc57506001548235145b60276121b5565b6000808055600280546105d590612609565b80601f016020809104026020016040519081016040528092919081815260200182805461060190612609565b801561064e5780601f106106235761010080835404028352916020019161064e565b820191906000526020600020905b81548152906001019060200180831161063157829003601f168201915b50505050508060200190518101906106669190612846565b905061067e6040518060200160405280600081525090565b61068f8260e00151431060286121b5565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de896833846040516106c09291906128f2565b60405180910390a16106d4341560246121b5565b60608201516106ef906001600160a01b0316331460256121b5565b6106fd4383604001516121db565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600b60005543600155905161056e9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b61083960016000541460096121b5565b6108538135158061084c57506001548235145b600a6121b5565b60008080556002805461086590612609565b80601f016020809104026020016040519081016040528092919081815260200182805461089190612609565b80156108de5780601f106108b3576101008083540402835291602001916108de565b820191906000526020600020905b8154815290600101906020018083116108c157829003601f168201915b50505050508060200190518101906108f69190612919565b905061090981606001514310600b6121b5565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161093a929190612992565b60405180910390a16109538160200151341460086121b5565b61095b612498565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526109b38161222e565b505050565b6109c8600f60005414604d6121b5565b6109e2813515806109db57506001548235145b604e6121b5565b6000808055600280546109f490612609565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2090612609565b8015610a6d5780601f10610a4257610100808354040283529160200191610a6d565b820191906000526020600020905b815481529060010190602001808311610a5057829003601f168201915b5050505050806020019051810190610a859190612757565b9050610a9a816101200151431015604f6121b5565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b3383604051610acb929190612992565b60405180910390a1610adf3415604b6121b5565b6060810151610b13906001600160a01b03163314610b095781516001600160a01b03163314610b0c565b60015b604c6121b5565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b50573d6000803e3d6000fd5b5060008080556001819055610b67906002906124f1565b5050565b610b7b600d6000541460416121b5565b610b9581351580610b8e57506001548235145b60426121b5565b600080805560028054610ba790612609565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd390612609565b8015610c205780601f10610bf557610100808354040283529160200191610c20565b820191906000526020600020905b815481529060010190602001808311610c0357829003601f168201915b5050505050806020019051810190610c389190612757565b9050610c4d81610120015143101560436121b5565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610c7e929190612992565b60405180910390a1610c923415603f6121b5565b6060810151610cc6906001600160a01b03163314610cbc5781516001600160a01b03163314610cbf565b60015b60406121b5565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610b50573d6000803e3d6000fd5b610d17600f6000541460486121b5565b610d3181351580610d2a57506001548235145b60496121b5565b600080805560028054610d4390612609565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6f90612609565b8015610dbc5780601f10610d9157610100808354040283529160200191610dbc565b820191906000526020600020905b815481529060010190602001808311610d9f57829003601f168201915b5050505050806020019051810190610dd49190612757565b9050610dec6040518060200160405280600081525090565b610dfe8261012001514310604a6121b5565b7fad7c17ce54124d90376267484eedf80172c4c6c0aaf121722e6bab9fa6ba1c033384604051610e2f929190612774565b60405180910390a1610e43341560446121b5565b6060820151610e5e906001600160a01b0316331460456121b5565b60408051610eaa91610e8491602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460466121b5565b604080516060858101356020830152608086013592820192909252610ef091016040516020818303038152906040528051906020012060001c8360c001511460476121b5565b610efe4383604001516121db565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601518185015260e08087015160a08601526101008088015160c0870152888501359186019190915290870135908401528351610120840152601160005543600155905161056e91839101612837565b610fe7600160005414600d6121b5565b61100181351580610ffa57506001548235145b600e6121b5565b60008080556002805461101390612609565b80601f016020809104026020016040519081016040528092919081815260200182805461103f90612609565b801561108c5780601f106110615761010080835404028352916020019161108c565b820191906000526020600020905b81548152906001019060200180831161106f57829003601f168201915b50505050508060200190518101906110a49190612919565b90506110b88160600151431015600f6121b5565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516110e9929190612992565b60405180910390a16110fd3415600c6121b5565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b50573d6000803e3d6000fd5b61114a600b6000541460356121b5565b6111648135158061115d57506001548235145b60366121b5565b60008080556002805461117690612609565b80601f01602080910402602001604051908101604052809291908181526020018280546111a290612609565b80156111ef5780601f106111c4576101008083540402835291602001916111ef565b820191906000526020600020905b8154815290600101906020018083116111d257829003601f168201915b505050505080602001905181019061120791906129cf565b905061121c81610100015143101560376121b5565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a550338360405161124d929190612992565b60405180910390a1611261341560336121b5565b6060810151610b13906001600160a01b0316331461128b5781516001600160a01b0316331461128e565b60015b60346121b5565b6112a560056000541460176121b5565b6112bf813515806112b857506001548235145b60186121b5565b6000808055600280546112d190612609565b80601f01602080910402602001604051908101604052809291908181526020018280546112fd90612609565b801561134a5780601f1061131f5761010080835404028352916020019161134a565b820191906000526020600020905b81548152906001019060200180831161132d57829003601f168201915b50505050508060200190518101906113629190612a58565b90506113768160a0015143101560196121b5565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516113a7929190612992565b60405180910390a16113bb341560156121b5565b6060810151610cc6906001600160a01b031633146113e55781516001600160a01b031633146113e8565b60015b60166121b5565b6113ff600760005414601c6121b5565b6114198135158061141257506001548235145b601d6121b5565b60008080556002805461142b90612609565b80601f016020809104026020016040519081016040528092919081815260200182805461145790612609565b80156114a45780601f10611479576101008083540402835291602001916114a4565b820191906000526020600020905b81548152906001019060200180831161148757829003601f168201915b50505050508060200190518101906114bc9190612aec565b90506114d46040518060200160405280600081525090565b6114e58260c001514310601e6121b5565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516115169291906128f2565b60405180910390a161152a3415601a6121b5565b8151611542906001600160a01b03163314601b6121b5565b6115504383604001516121db565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e0840152600960005543600155905161056e9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b61167160116000541460576121b5565b61168b8135158061168457506001548235145b60586121b5565b60008080556002805461169d90612609565b80601f01602080910402602001604051908101604052809291908181526020018280546116c990612609565b80156117165780601f106116eb57610100808354040283529160200191611716565b820191906000526020600020905b8154815290600101906020018083116116f957829003601f168201915b505050505080602001905181019061172e9190612757565b905061174381610120015143101560596121b5565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed2353383604051611774929190612992565b60405180910390a1611788341560556121b5565b6060810151610cc6906001600160a01b031633146117b25781516001600160a01b031633146117b5565b60015b60566121b5565b6117cc60056000541460126121b5565b6117e6813515806117df57506001548235145b60136121b5565b6000808055600280546117f890612609565b80601f016020809104026020016040519081016040528092919081815260200182805461182490612609565b80156118715780601f1061184657610100808354040283529160200191611871565b820191906000526020600020905b81548152906001019060200180831161185457829003601f168201915b50505050508060200190518101906118899190612a58565b90506118a16040518060200160405280600081525090565b6118b28260a00151431060146121b5565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516118e39291906128f2565b60405180910390a16118f7341560106121b5565b815161190f906001600160a01b0316331460116121b5565b61191d4383604001516121db565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e08201526101000161056e565b600060606000546002808054611a1490612609565b80601f0160208091040260200160405190810160405280929190818152602001828054611a4090612609565b8015611a8d5780601f10611a6257610100808354040283529160200191611a8d565b820191906000526020600020905b815481529060010190602001808311611a7057829003601f168201915b50505050509050915091509091565b611aac600b6000541460306121b5565b611ac681351580611abf57506001548235145b60316121b5565b600080805560028054611ad890612609565b80601f0160208091040260200160405190810160405280929190818152602001828054611b0490612609565b8015611b515780601f10611b2657610100808354040283529160200191611b51565b820191906000526020600020905b815481529060010190602001808311611b3457829003601f168201915b5050505050806020019051810190611b6991906129cf565b9050611b816040518060200160405280600081525090565b611b93826101000151431060326121b5565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611bc49291906128f2565b60405180910390a1611bd83415602e6121b5565b6060820151611bf3906001600160a01b03163314602f6121b5565b611c014383604001516121db565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600d60005543600155905161056e91839101612837565b611ce860076000541460216121b5565b611d0281351580611cfb57506001548235145b60226121b5565b600080805560028054611d1490612609565b80601f0160208091040260200160405190810160405280929190818152602001828054611d4090612609565b8015611d8d5780601f10611d6257610100808354040283529160200191611d8d565b820191906000526020600020905b815481529060010190602001808311611d7057829003601f168201915b5050505050806020019051810190611da59190612aec565b9050611db98160c0015143101560236121b5565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611dea929190612992565b60405180910390a1611dfe3415601f6121b5565b6060810151610cc6906001600160a01b03163314611e285781516001600160a01b03163314611e2b565b60015b60206121b5565b611e42600960005414602b6121b5565b611e5c81351580611e5557506001548235145b602c6121b5565b600080805560028054611e6e90612609565b80601f0160208091040260200160405190810160405280929190818152602001828054611e9a90612609565b8015611ee75780601f10611ebc57610100808354040283529160200191611ee7565b820191906000526020600020905b815481529060010190602001808311611eca57829003601f168201915b5050505050806020019051810190611eff9190612846565b9050611f138160e00151431015602d6121b5565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611f44929190612992565b60405180910390a1611f58341560296121b5565b6060810151610b13906001600160a01b03163314611f825781516001600160a01b03163314611f85565b60015b602a6121b5565b611f9c60116000541460526121b5565b611fb681351580611faf57506001548235145b60536121b5565b600080805560028054611fc890612609565b80601f0160208091040260200160405190810160405280929190818152602001828054611ff490612609565b80156120415780601f1061201657610100808354040283529160200191612041565b820191906000526020600020905b81548152906001019060200180831161202457829003601f168201915b50505050508060200190518101906120599190612757565b9050612078604051806040016040528060008152602001600081525090565b61208a826101200151431060546121b5565b7f766f2c6dd42a0af16e854477c4e7575763994a6ce78f7dd208ae78a809469ee433846040516120bb9291906128f2565b60405180910390a16120cf341560506121b5565b81516120e7906001600160a01b0316331460516121b5565b8161010001518260c0015114156121015760018152612148565b6121138260a001518360e001516121db565b6020820181905260c0830151146121425781610100015181602001511461213b576001612145565b6000612145565b60025b81525b612150612498565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252835181840180519190915280514392019190915260808501519051909101526121af8161222e565b50505050565b81610b675760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826121e88382612ba0565b91508110156122285760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016121d2565b92915050565b60408051602081019091526000815260208201515160011415612352576122658260200151602001518360000151604001516121db565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906121af929190612414565b60208201515160021461236a5781516060015161236e565b8151515b6001600160a01b03166108fc61238d60028560000151602001516123b5565b6040518115909202916000818181858888f19350505050158015610b50573d6000803e3d6000fd5b60008115806123d9575082826123cb8183612bb8565b92506123d79083612bd7565b145b6122285760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016121d2565b82805461242090612609565b90600052602060002090601f0160209004810192826124425760008555612488565b82601f1061245b57805160ff1916838001178555612488565b82800160010185558215612488579182015b8281111561248857825182559160200191906001019061246d565b5061249492915061252e565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016124ec60405180606001604052806000815260200160008152602001600081525090565b905290565b5080546124fd90612609565b6000825580601f1061250d575050565b601f01602090049060005260206000209081019061252b919061252e565b50565b5b80821115612494576000815560010161252f565b600060a0828403121561255557600080fd5b50919050565b600060a0828403121561256d57600080fd5b6125778383612543565b9392505050565b60006040828403121561255557600080fd5b6000604082840312156125a257600080fd5b612577838361257e565b82815260006020604081840152835180604085015260005b818110156125e0578581018301518582016060015282016125c4565b818111156125f2576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061261d57607f821691505b6020821081141561255557634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561267057634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561267057634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146126bf57600080fd5b919050565b600061014082840312156126d757600080fd5b6126df61263e565b90506126ea826126a8565b8152602082015160208201526040820151604082015261270c606083016126a8565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b6000610140828403121561276a57600080fd5b61257783836126c4565b6001600160a01b038316815260c08101612577602083018480358252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b80516001600160a01b03168252602081015160208301526040810151604083015260608101516127f760608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b610140810161222882846127bc565b600061010080838503121561285a57600080fd5b6040519081019067ffffffffffffffff8211818310171561288b57634e487b7160e01b600052604160045260246000fd5b81604052612898846126a8565b815260208401516020820152604084015160408201526128ba606085016126a8565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b038316815260608101612577602083018480358252602090810135910152565b60006080828403121561292b57600080fd5b6040516080810181811067ffffffffffffffff8211171561295c57634e487b7160e01b600052604160045260246000fd5b604052612968836126a8565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146129c057600080fd5b80604085015250509392505050565b600061012082840312156129e257600080fd5b6129ea612676565b6129f3836126a8565b81526020830151602082015260408301516040820152612a15606084016126a8565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c08284031215612a6a57600080fd5b60405160c0810181811067ffffffffffffffff82111715612a9b57634e487b7160e01b600052604160045260246000fd5b604052612aa7836126a8565b81526020830151602082015260408301516040820152612ac9606084016126a8565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e08284031215612afe57600080fd5b60405160e0810181811067ffffffffffffffff82111715612b2f57634e487b7160e01b600052604160045260246000fd5b604052612b3b836126a8565b81526020830151602082015260408301516040820152612b5d606084016126a8565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612bb357612bb3612b8a565b500190565b6000816000190483118215151615612bd257612bd2612b8a565b500290565b600082612bf457634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212203b42e3a7709d76f9e6e6690597846c3793a67c9f5f40e6d2337ffa104e83be4664736f6c634300080c0033`,
  BytecodeLen: 12204,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:92:12:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:98:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:192:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:104:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:116:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:117:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:119:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:120:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:138:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:139:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:142:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:143:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:157:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:161:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:171:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:174:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:182:64:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Evens": Evens,
  "Odds": Odds
  };
export const _APIs = {
  };
