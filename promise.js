function Promise(executor) {
    const _this = this;

    _this.status = 'pending';
    _this.value = null;
    _this.resolveCallbacks = [];
    _this.rejectCallbacks = [];

    function resolve(value) {
        if (_this.status === 'pending') {
            _this.status = 'resolved';
            _this.value = value;
            _this.resolveCallbacks.map(cb => cb(_this.value));
        }
    }

    function reject(value) {
        if (_this.status === 'pending') {
            _this.status = 'rejected';
            _this.value = value;
            _this.rejectCallbacks.map(cb => cb(_this.value));
        }
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onFufiled, onRejected) {
    const _this = this;

    if (_this.status === 'pending') {
        _this.resolveCallbacks.push(onFufiled);
        _this.rejectCallbacks.push(onRejected);
    }

    if (_this.status === 'resolved') {
        onFufiled(_this.value);
    }

    if (_this.status === 'rejected') {
        onRejected(_this.value);
    }
}