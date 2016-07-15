System.register(['@angular/core', "./new-item.component", "./item.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, new_item_component_1, item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (new_item_component_1_1) {
                new_item_component_1 = new_item_component_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n            <new-item (itemAdded)=\"onItemAdded($event)\"></new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">{{listItem.name}} ({{listItem.amount}})</li>\n                </ul>\n            </div>\n        </section>\n        <section *ngIf=\"selectedItem != null\">\n            <edit-item [item]=\"selectedItem\" (removed)=\"onRemove($event)\"></edit-item>\n        </section>\n    ",
                        directives: [new_item_component_1.NewItemComponent, item_component_1.ItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7b0JBQ0ksY0FBUyxHQUFHLElBQUksS0FBSyxFQUFjLENBQUM7Z0JBZXhDLENBQUM7Z0JBWkcsMkNBQVcsR0FBWCxVQUFZLElBQWM7b0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUVELHdDQUFRLEdBQVIsVUFBUyxJQUFjO29CQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQW5DTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsdWtCQWVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHFDQUFnQixFQUFFLDhCQUFhLENBQUM7cUJBQ2hELENBQUM7O3lDQUFBO2dCQWlCRiw0QkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQseURBZ0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZXdJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9uZXctaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tIFwiLi4vbGlzdC1pdGVtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8bmV3LWl0ZW0gKGl0ZW1BZGRlZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+PC9uZXctaXRlbT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxoMz5NeSBMaXN0PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2xpc3RJdGVtIG9mIGxpc3RJdGVtc1wiIChjbGljayk9XCJvblNlbGVjdChsaXN0SXRlbSlcIj57e2xpc3RJdGVtLm5hbWV9fSAoe3tsaXN0SXRlbS5hbW91bnR9fSk8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uICpuZ0lmPVwic2VsZWN0ZWRJdGVtICE9IG51bGxcIj5cclxuICAgICAgICAgICAgPGVkaXQtaXRlbSBbaXRlbV09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZCk9XCJvblJlbW92ZSgkZXZlbnQpXCI+PC9lZGl0LWl0ZW0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtOZXdJdGVtQ29tcG9uZW50LCBJdGVtQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IHtcclxuICAgIGxpc3RJdGVtcyA9IG5ldyBBcnJheTx7TGlzdEl0ZW19PigpO1xyXG4gICAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbTtcclxuXHJcbiAgICBvbkl0ZW1BZGRlZChpdGVtOiBMaXN0SXRlbSkge1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goe25hbWU6IGl0ZW0ubmFtZSwgYW1vdW50OiBpdGVtLmFtb3VudH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KGl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVtb3ZlKGl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMuc3BsaWNlKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
