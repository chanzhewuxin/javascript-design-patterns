// 编辑文本框
function EditInPlaceField(id, parent, value) {
    this.id = id;
    this.value = value || 'default value';
    this.parentElement = parent;

    this.createElements(this.id);
    this.attachEvents();
}

EditInPlaceField.prototype = {
    createElements: function (id) {
        this.containerElement = document.createElement('div');
        this.parentElement.appendChild(this.containerElement);

        this.staticElement = document.createElement('span');
        this.containerElement.appendChild(this.staticElement);
        this.staticElement.innerHTML = this.value;

        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
        this.containerElement.appendChild(this.fieldElement);

        this.saveElement = document.createElement('input');
        this.saveElement.type = 'button';
        this.saveElement.value = 'Save';
        this.containerElement.appendChild(this.saveElement);

        this.cancelElement = document.createElement('input');
        this.cancelElement.type = 'button';
        this.cancelElement.value = 'Cancel';
        this.containerElement.appendChild(this.cancelElement);

        this.convertToText();
    },
    convertToText: function () {
        this.staticElement.style.display = 'inline';
        this.fieldElement.style.display = 'none';
        this.saveElement.style.display = 'none';
        this.cancelElement.style.display = 'none';

        this.setValue(this.value);
    },
    converToEditable: function () {
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'inline';
        this.saveElement.style.display = 'inline';
        this.cancelElement.style.display = 'inline';

        this.setValue(this.value);
    },
    attachEvents: function () {
        var that = this;
        addEvent(this.staticElement, 'click', function () {
            that.converToEditable();
        });
        addEvent(this.saveElement, 'click', function () {
            that.save();
        });
        addEvent(this.cancelElement, 'click', function () {
            that.cancel();
        });
    },
    save: function () {
        this.value = this.getValue();
        var that = this;
        var callback = {
            success: function () {
                that.convertToText();
            },
            failure: function () {
                alert('Error saving value.')
            }
        }
        /// 提交到服务器 ...
        this.convertToText();
    },
    cancel: function () {
        this.convertToText();
    },
    getValue: function () {
        return this.fieldElement.value;
    },
    setValue: function (value) {
        if (!value) {
            alert('必须提供值');
            return;
        }
        this.fieldElement.value = value;
        this.staticElement.innerHTML = value;
    }
}