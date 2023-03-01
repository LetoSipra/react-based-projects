const calculatex = (value) => {
            
            if (Number.isInteger(value)) {
                if (display) {
                    setDisplay([display] + value)
                } else {setDisplay(value)}
        }
            if (display) {
                if (disNum) {
                
                if (value === '+') {
                setOp('+')
                setDisNum(disNum + Number.parseInt(display, 10))
                setDisplay(0)
        }
                if (value === '-') {
                setOp('-')
                setDisNum(disNum - Number.parseInt(display, 10))
                setDisplay(0)
        }
                if (value === '*') {
                setOp('*')
                setDisNum(disNum * Number.parseInt(display, 10))
                setDisplay(0)
        }
                if (value === '/') {
                setOp('/')
                setDisNum(disNum / Number.parseInt(display, 10))
                setDisplay(0)
        }
                } else {
                if (/[+-/*]/.test(value)) {
                setDisNum(Number.parseInt(display, 10))
                setDisplay(0)
                }
                }
    }}