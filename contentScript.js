(() => {
  const rootClass = "retrofy-page-active";
  const chromeId = "retrofy-page-chrome";
  const browserClass = "retrofy-browser-active";
  const browserId = "retrofy-browser-frame";
  const desktopClass = "retrofy-desktop-active";
  const desktopId = "retrofy-win95-desktop";
  const effectsId = "retrofy-page-effects";
  const loaderId = "retrofy-page-loader";
  const modeClasses = ["retrofy-mode-soft", "retrofy-mode-chaos", "retrofy-mode-pure-html"];
  const sparkleClass = "retrofy-page-sparkle";
  const dialUpSoundBase64 = "UklGRpRJAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YXBJAACAo7Ojf2BdaHh/kJ2pkXVZT2qWr66Za15jc4KRnp2ThmRSW4KqvKd4V1dogZOYlYt9Y1lheKK3qnxXRmORqKmOfWxlZ2yFo6yfeFhLZpW1qpBqU2F3i56ZkIloVVt3m7usgFNMZomoro1zX2Fteo6foJBuU1Nyprune05RbpCrqYl4bGZwgZKmnYhhUFuAqLuaalJZeJWmnop0Y2Vse5mrpIJUT2CVtbOLY0xahJWllYNyaWNng5ynm3BVTXKitaeGYlFogpOhl414YVtsg6axlmlIU3uhr6N5ZGBqe5CXoJOCaE5bgLGyn29TUmubqJ+KdG9iaHeUoqqPZ0tSeJ+vooVlXWV0hpChno9rWVFulLi2jGFYV3iRlZ+ci3RgVF1/prSedVROaHyRn5uSjHFTT2eQsbOfeVxSZneJmaKjlnZaRWGHqq+ihmxnYmt2hpyxq4xgTlN2lqOjnZKDc15MZICttqWKamVlaHB5j6ivnXlUR1t3ipOdop2PdFNDWHacqaObi354XEtab5ius5d9cmhkWFdrk6q4q4VpaWBgZmyEpbSunnlpY2ZgYXOPq7apkWxfXV9mZnmPrbmkimldZWVdZ3eQrb2pkXBpZGZXX2mIrrCnjoN5dmhSTmGJqLGknI+HhGhOS1t6lp2ilqOhlHNaRlJlg4WOl6avrIdnUVlec3F8iai0t598bGlnZllccJCsuKOPgHx3YFBNXYCirZ6Xm5WNbFRGUm+GkpKZoamafVlKUGB4eXyUqbWqiW1fX2RpbHOEqLm3mnxxZ2tjXWSAnreym4p9bmheU2F9oK6snIl9eG1YVV95nLOwkop6emRaTWeLrbKrjoFxbGBUWnOet7Keg29lZGdgd5GyuKd6Z1Rja3OBlKmuoH1XS1dykJiXl5aLd1hIYoqnuJ6Kb2pgZWx8l6u1kWVHU3KSnaaciYJxYF5ukLO1lmhRUWuSmJ+aiHVlX12Bp7Kfdk9MZpGjo5N3ZWVtco+jqJVsUVJ3obuje1pObpWnpol1a2NyhpqplHJdUnictaZySlN5qLSZa1NagJ6mlnlnZnmRoJiGaF1jiqinjl5QaZq3qHJLUoSrr41eTGybtJtmTluSs6J3WVZ9pauFYV14kqOQcGFriZ+Tf2hohJiWhmhmf5CVgGtidZebhWtje5GeimlldZCYgWtpf5CWg2RohZWXe2JshZ+UdmN0lJuGcGSBm5uBamuJmox1ZXaTnoZjYoWfnXphYpCpmG9VbqGpil9Ug62lblZml6+VZ0hvprOETVF/uK5zSWGZuJpcS2qrtYlTVISzqnpHYI60nmZNb5ywj1RTfqmrfFRfjrCca0xolaqXYU9wo6mQYV12naN/V1yDpqh6XmOBpqR9WWaLrqF0W1uNp592UVyKq6R2VVyKqq58VFZ9sK2DVlNwqbWLYUhloLifbU5Xkq2ud1lWdqelkWlcY4CZn4RzZm15jp6Qd2dfd5Oxo3hNSnCnuKNxTVR8oqmdfl1ba36SmZKHaFRcep64qHtXTmuUrqSPdmRkbXOJmKucdlJIXISwtJp/amNldH2PoailgFxCW3qgpZyNjHxtVFZphq62oYVyYmZhYnOHqbyrjWlYYGFoaHmLsbiljm1gZmFnZGqGrrOwk351dW1dUFBoiqOlmJmdnZV6W0xYYmpob3mas7allI2OiXZcSUpZaXNpcH+frayimp+mnYVxYVtiY1dNVWB4hoGCjZuxu6eZk6KmloJyZW9tbFJJTF5sbGRkbn6Vk4yRlKe5sZ+Zoa2sm4h7hYiFfGZcX2VlVUlOVGljXVNSa319dWtwgpKXlIyToauqoJ2ctLespZygraqekoCMlpGDcWl4d3huX1ViZGphTk1YY2JXUElcanBiW2FwfIV4a3+HnZmKjpOmsqigl6K3u6+enaSnrJyJgYqVlIBoXmtzcGRTUlxjY1RIUGRwdW5ia4iXnpKPlaW2tqSdm6qrn4V3d353bVVRUGFlYVhUaX6QiYuMnrO6rpmVk5mPeFpSWWRdXE1hepGbl5CesrKkiXtsdGtjUkhgdoqQlpujrq6bfGllZmhbXmiIoa+ulImGg3FVRk1qiqWfmpmXlHRbR1VwjqSampiXhmZTSWCIqKieinxuZ1xbbpayr5tvUVVufZSfnpaHcFRNbpq6qo9hSVl9lqGUhHlkYHCEn66TblJRe6u2nGRGVICmqo9kUWSKmqKLbGZrjJmXg2hjdYigk3VdY4Sfm4FfXX+ep4BjWoSjn4BbYoaikXJad5CkhGlpgJ6KbGyDmJVvZ3yen3ZedZ6ndVVdn7OPU1WTt5pUU4mzl2Jcg52Qa3CUnHhaf6aOW1ORt5BOWJq2h1Jlm5V0aYyXcVd/rp9VTI+7iFVkoJ9uZIuac12Uq4ZFaq+lZViEooJpgZ90VnmwmVdVmLJ6XYOgc2STpXRKebScW12YoHFplJpeYJq2c05/rpVhcZ6EXHyrjlFjp6xsT4mjeGKOonJaiLWKSG2rmWxml45qc6mkYUuRu4JSbqSTbHabh11ppbFjTX2vjl1umY5ubpefaVaNsotLXp+sc1d/oYJoe6OSWVyVuYZRY6CyeU9xoJ1vZ4yZgV95pJ9qU3ezqWZEca6xckhroKZ5XWiToXxgbZCUgGRrlJp/XmaJqZBqWHaeqHZTW42toGuKp7a0sJp5XVZYaH2Ym5iLem5hXnGLm6ymjnZgUlJhhJ6mppeHb1xZZICXn6eYjXhpY2hofIyqqKWAZExPZpy6tZ1+V1hec3uNoaeifFFBU4GfrpuHhnJSR2OWs7eRbGpgWGCStrWEY2dcWHOjwaF0Z2JTaJu5oYF1Zkdbna+YmolUQnSYl6upbkZocYK1uHtqXkhzsaqajFtKfYuovIBhXlaCsJ6XfERhhJu+j2dnTouqop1bVnKEuqN4aUOImKmiW2BelreYiEFleKSzemVMipaziVFic7OdlUxnd7SleFZclZ2kUl1htJuRSXCAwYh1QoiXsWtjX7KelkNxiL14Zl+cqYBhVqmfj0Nxj7lvT3KislplbrmHXmqMtmtbba2jS2qPsmtQiKOdS2u2iXJVoLJcbImxdkKfon1geL13TpKchVaCv2hSpJxtYYqtUl67gVOCm4xOg7piW7iKTYOhd1+QqV5lvn5KpZ1Jia9lapeHYH+bb2GphlOgpUKNsEx1t1dnuGpSuHlNsoZDqJBHnJ5LmqFJkKtJkKpLjq5BkK5JkqhCi6RFlKNRnpZVo4VaonR1mmKKlV+ceFuva2y9UIKuQ5iWQ618X6lgg5FemGd+mFGqgVO6WHixQamFXq9jhZdpo2mIgl+sVYeaSrZad61IqnpnrFWefmyeZaFri5FhsFeZi2C8TaaBXL1CrXBktUSwZHKfUrNbkYhZsFGid3GdT6xhiodap1SpcHmiVbNPnoBrp0K4T6R9a6dMsVqTgWuZZpeCbqNNtFWXgmCtT6hnh4xfrF6SgmemT6BxfqFPwEylbX2WW6duf5Jdm25/nVetW4+XUbtLm31Xt0mkdly1QK93YbNDp4FbvE6Wm0+0YXahYJhycZxknnRqqlmYnEG1f1W0Y26vWYuGaKNperlJhLZTiZ5XjIRqrmpXu3VQqIBxnmJ1tWNTt4Jon3Vdu4BCmptfkJlIgrxtWJx5WLCpUW6od2WzlUtnqX1eq61UU5SLT4LAlVJ3pmlEeq2LXIe7kFxto5JUUJCecFN6ualxZZ63om5gkrSWYFeCqZxuSmmbs49lWXKirp1uYXOou7SKZlp6naOae1RGVHiTrqicgWNZYnmQoJ2YgHhoW2hpe4eXqrWyoYxlT0ZDUmV0e3V+g5uwu7KpoaiztbGXjoujqp6JiYmkqpyLlZ65s5+hrLu0o5mWopluYmFrYENNa36DhJy2vpeHhHNUQld+jJCrtqVsYmJgYIO2spJ9aFlTgLC4j3pjUmWauJpkWmFvormJTVaCop2VZ06BuZxeXHGOqY5XU5+7gFF2oZ1/YV+atGlHj79/UHehkXRdibCHUoHBg0KHvHlOk6p0Wo2jal+Ln3Vhjpdqa52NWXWxfFOfoVpwsnxVm6dYdKp9WpuaVX+eZ3KiemeZgWOYjFmIqlRpvW5Ns5w/jqxVdKBxd6Nkb7BnULWERpugX4OYXpqXRYa+X2Kxe3OgamO8hkKcoGGVikufs1NvqWmAqWJesIpVmXhNp6VOeZ9cf7ZtUpOCXaOqUG6iZ2u6kFOBlFB2v4RimoxIZ6h9aaytYWGgdUV5r21mpbhnbquXUluXg0pdoopNb6qcYGutuHdppsKJZIi7sGxkncCfaG+cs4hZYoylgkpLa5yXb1JnnLquhVhgeZeWel1YfJ2srIVfQ1eEpLqqhGpfXW9+hJOfsLGIZUpOYWltc4Slu6ybnrCrjXl8hHFXYHFbRVdrXkheZFNRZ2xbb4GBd6Kij7W1oqape3J4RVRuXoSrnbCmfXdTS3h4o7WIh1NTfIq5lm1cSpahrnBTdZK5e2JMnbCIUmSxl3NIoZuJPpGfjDyemntDq5FgarV0X6CPVX6xQo2aaH2oYHK7SpWiR6OAaqtpfpNZnHNtmlWnanahTL5ZiZtQslahWqdakodinG6VXrdHp2ihSbpOm2GySp9zkl+ciGSQcqpBuGqRZYerT5xkpWxdsGSnYHi2V5BufLJMgZRnrGpYunOCnUeVslaAjlGpnkaAl2aZqExurndqonpCmK5ja511VJ63Zlqbj1WIwH8/cKuGZo6zaUZ+uZdbfKWKSWOpt35WepuCUmesvYRRXpSic1qBt6VdPWSorYpgdZ6feklgk7msbk1qlaSCZmmZtZljQF2Zu6J2VmySmIVfYIu0s3xKQXaqvJpoVnqTmHpgZZKzpGhEWIu7r3hEUIizo3VfbYqih2JrkqybZk1zrbuDTlGPvKFhSm6mpXVXcZ2XeGWFnINeZJiobkp0rZ1cSZq4fj9us6FNWqimYl2XomNqlYxdf5t4X5ubXHmzfU2irUlyvm5Osp5Kkq9Yf7BfcqNmg51gjJBfoXxesWJ1tEqVm0i2YXGtS6Bzb6ZfpmORe4GQaKhJuFCWc3KfWq5HslWwWqJcmmSdXKVhn1egYpF1dpJgomGZaYePXbRRqXFqrkisaHqcaIaZVY+SQ7l+Vbtra6J6X5GhWn23WV+9gFOGonxVfrJ9RYm+dFt3lqaAS16ztHJMdY6ioYVUT4G3soNuaFlUfaPCrYhua2NZR1h4naqknKaxubiijYmCiZagoZmGjo2YnrDAv7mum4VvV0NHSGBvkKuwrpN7XGd7nL27n3Jmcpy9pX5YaJekhlRNc6KMVl6Wt5BlhbGER2OZkViEwoNOe5xZaLyZUYqIUoi/YG2iWnu8amGgX4+qSYiXY6xjX7ZjkHthwVB9k2qsS6aDaZBgvFCRgXeLXrZJo2OfVp96cJhwjWOyR6xdoV+vR7dbmWKrSrZVm3KRap5ilH5vqE20VJ5ommChao5/ZKxFwkOpcnuaVL5GtGeJlVG9RrZkgplOvkOsYnqWXqRnhY5enmCDlla2Pq9ndZtXqHN2nFOqaXihRb5XkodioGqGmlC8S6Zxd5ZdjoZmt0C2TZF/aJ5oj4VfrEq6UJ10cJ9jnHF7mlisTbZQoml/iGueVaNnmHR6lGajVrdQt0W1TbRRp1+fa5xqj3ONcIlylHCMcplpl2OlXKNdrFmnZZF5e41ppVGsUKR2f55JwUuuc22pQ7dbgaJVq3R2m2R8kmCJnFSki0m+dVW+bWaocmWRmFx6tWNawHlJkpdyY4ita02psVlXk6CAYFqhr2tDiKuVhV1OjL6cXlVpd5y0mV1IZHiHnbmogVdWXGFcbZ6yqqKmp6mcgHV0fXxuVVZiaHN1ZXR0mGaEj2GbeHaXX5t8bZtgmn50lV+ccYKBbpNknGaMgG2eTbNSm3p2oVWqVpxqlHGNbYeEdppVsVKsXpZsoVqlV6tZlnCNdo5snl+gY5Jtj3SUX61KrVueZZhnplqqVqFze41um2eZbp5epk6qW4+DaqBcp16dbYt2jn9zlViuS6hweZhVsFehbnqQaptmmWmOd3yMZaNWpWp5n1C0UpSCYKhMqGqBl16qW5R8e49pn2OQdX6LZqJhnWx5lVmvVp2DaLNOrWiCmVm0XJZ2eplgomqXc4SFcZpirFaadnCjVLFWonhymF2fZZ9sknWKeHKeVLRJr2SQf3OVZ5twml6nVK1YpmaGgXiKeIZ8jHGgVKpRpmWcbJ9dqEivUqRil2qdW6pPpmCTfoGIeod3jnOcW7dKr2OVg3KQZZNinGGfZYmGaqxSsWaDmla3VpuHWbJLmoVdtFCUilevUoWWUbRvaa9Qk5VUoXxqom12nXVwnnNjsGVmtlpurWpyk4xgkZ1Miqhfe5yGXoGxW2utg2d3pIdRlJpzaH6ucVqWnH9Zerh8bGqXsGBhe5imWWSJmqNaXIOep2pjb4q3jHFfZKWgmnZMcX2fqnl4VmSIl7GOd21Nd3ubtpCYblpoUoWSmbOTk3ZjZU9ibX2dkrCpkKF6em9WZUxjZFx8doqYjaqeq7GYtqOkpI+ejYmUgI+Df41yi39/jHmMhXyTeZmOiqKNp6iVtZeoppmrlJaUfY9raWVQYlFfalp/dYijjrShoqaHkXJrakxeXVx8fKGgnraSn4Rla0tcZmKIg6aomqd+fmpNZVBshIWunqefdIFSVWNfjoacrZKfgXFsTGNoeaKUsJ+Tk2BjWFd1c5Gho62Ik3RaZ1FqeHmhnaelkZhwYmBNZ2N5ko+zoKehgoRtWWdIamNtin6moaWwm6KWg4tial5VZkliZlp6cIuJg6ORpKmUtJumsJe2m6SllKiQnKSGo5SVp4qlkpivjrChnbWasKeYrpCbi3+FaW5fTWJJaG1mjIaeqJy0jYh+VmNRXnZ6opmjoXR8VFN0c6SipZtnZVRnlJKyiGVlVYeeoZpfW2qJsJJ2W1+dnpRnS4SRoX5OgY+keU6Dn55xUpqkhWBisJBacZCmXmWqimpoopZIiaN1Z42fWWu1a2acg2qDpmZwuV94r2R4mHZ1m35mqmhvsE+InUqte2GsVY2dUKlndZ5Un3Vzp1SmcH2gTrJej4dar0esaYmPa5hnmmOcZKRjnXB6lWGiW51lmWukV7NMtFWhXp1kpVOvTqtglHeIeoxyi3lxnFetSbNal3yAhHSOaptdo2OWgWqkTbBbho9ark2hdXKhU6dveZVcomWGjWCman+MXaFxgJVannJtoFyWhmCoW4CdTKh1ZLBWlZVQsW1yr02YilWldmyiaIWQYoSMYJeLYKR6Y6pbgKRIoodXtGZ2q1mSlVqShWqYgmygeWmjXYehT5+HU7lbeq5Jm4ZYqGh0nV2LimicfXOVbnybaJKIYZ9pe6Fbn4Fpq1mPjWSsWYaQXbBdh5Vaq2WShGKeYpN8dZBlnmuXcn2MaJ5bqWSIkGSsTLBZjIJxlnCVapZlqFSrVZtxhIR6jYF9gYFumGOhY5p0h3qBe5J2hoVvmliwWp9jmWmVY5BzeZZcslCtanuiV65ejoVrqF6afXKjYpp9aaRYkpFarmd1rVSRmk+wfWOpZ2yccXCZgFqhhk+th1KckGNyp4VRqpZYhZZ+V4quXWKfknhYn6RfcIqqfkyQopdsWaCkgGNVnp2CalGSpJB4THyTn6FiaGOKs5KRZVV6eK6nhYJQX3J7qZejkGhwS2N4e6aep6SDkGhfYkdsYXSKfqqepbWatJ2WmXqMgXN/Z3tkZnZUamNWbVZzbGN6Xnl2dJR4kpOQq5eqq5mwlZeMcHpYYWBIcmZ4lYqto6KhfoNeWWpUgYOUr56hiGZxRmlwhLGbpYdlakhogo65k49vSWhhjKWboW1cY2SamaGaXWJbdaWZrX5bZ2SWpp2WUmFih62Wi2VUeoCspXdvTnKUmrNyZ11hnp+iflBqapmvjn1XXoiPs5BvZEyImJ+eZ2NdcqWeqXZTZmiYpZqWW15jc6WboINZZFiNnpuodGhaVoeIrKiHhllaaGaelqmsfHxaVmVdj5KcsJWcdmdmSWJncZeQr6abqoaJdV1rSmNbV3dje4d+n5Gbp5a3mamtmbmfqbCVs5+mqpSxpKG4la6moKmJpJJ/hWZ1X1BiTWRvdpiIqqebqHt1akxoWn+en66Le2dPaW+VrJibX1lpeqyeh25GdIqloWZmbJCygW9XgLCLbl19s4lnYYK4bGN9mppScquIZmiilU6DoIJkgLNZZ61zY5OSZm2vZHO1XG+ha3aVe2SheWyxW3yqTZ+CVbZbgJ1NrW12qUyxY3yfTbBYjpBiqlSlZ4+GeYlulWuiWLVSp1yReIB+iHePcIx9gY11fIpinVyjXpdnoWGqUqphi4dgrlSoX5B7c5NtmWSUa4GJZp1ak4Brn1ufenCnX5OJY6NogI9llIJomXp1mGZ3nVmUklargVy5ZHCqXn+fZ4Kba26oZ3C2XXarWIOgaHOYg2OkjVCkjk6ZkGGBonZfqnJdr4BljpJldKtyV7B1XZ+RaHerdV20g1WWlWZxqYFVsYpVkJlubKmAUa2QU5eYcXCgi1KqlFKTkGR4moBWrIlKoohZk5ZtcqprXrlqabBuc5yAZJeRUJ2RTa5+Wqd3aZp7cJt+Yp55Ya5bfqhHnJBTrmJ0qFaZgVunYH+TYKFxfJxdoXpznlqlcH+YXLJYln5kr0mxYImMbaNbnWWbaZhdnWeNinGcX5xpl3KQYqJUrFGmZ5V6jHGSbYmEcKdRtVOiZoiBdZRjmGGddYiJZadklIlspV+JjWCccnmfaoeTaoaPW5KNV6R9T653XKV8YpCYXneuZWque2WBonVTq5hac4+eWmKtimpkjrRkZHyZqF9pg6CkWlx6lLFxYWR8s5iAZ1KEj62iaWdVbJObr4x6b0hvZoOqnqyWf4BUaVFYc2uUkZSxl7Sil6eDiYZzfGR3a1htVmxqV3ZUZnNgeGeAhHebipevmbakoKCCjWxgZExnYWmQiqiioZ56dF1Ma2iYpZutgXRfTXd3paqMhlNYb36zmJJwUGx7o7ODe1NhkZOse1xpcK6fgWVMjJ+ag1FuiKKmX2B2lKxzYmuHsIBhaIa5hWVjebKDZ2B2s4ZpZny3g2Rmg7OCXHOOsHNXfpCvaFGLlaZjV5CYmFxXn5uOWl2rloVZa6+WeltpsZd2X3Ktk2pjb7KPbmVrrpp2YmOmpYBnUpmdk3NNepqjlVJpfJmudGFde6qWj2BWg5GunGhpV4iglpxsY2NknqCjkF9qUXeXlrKWgm9JZGN/p5usm4OFUWNZX4BtmZuZuJSjmIOKaXJhT2hQYWJTallybWaCZ3J9ZHtjcHlacFxfYk1oVl1wW3+BjKGUs6OUoHBwW01qXoiZobSKfmpNbHObsJONVVx0gbSXgF5Pkpefg013jaKWUG+AqJZVdZadg02Lpn9nY6yLT4aYiV2GsGNsoIdif6pna7RkY654b5uGX5uGWKJ/WblcfqNOpIBjsVmSilqxUJWLYrBPqm52o1WvWJlxin59g3uKaqdNuE+wW5ppnlinT7ZUqV6acpdwkmmLiWWuTbVYlXZvnmKeZJGAeZJpnnWCiGmcc3tsZo+hZl22kUGarFRxq4Nff6F4WpadUXu9cE+zlUOFumBTvIlCjLtSXL2LSZinWWeifGafimaRlFl3vXFKoqpNarB8ZaB8VpunT164jUuQl2CKrVpRtZ5SdJpheq9+PYm1cHSna0ugsVljmnxioalMXKyNYJagTFall16Dql1Jobdqa6d/Q4i9hlmKlVNjsq1ZYpeHU4O9kExonIVXhraMS2ifjmV9rZNMUpitfVyMnG5OgrmgXlCGn3tjga2RWkKNvqZlSnWolHNqgqWLW1+RspZfTGmkuIhPSIG4sYZORnmxuYpRTnWeqJBrZGV0jKamhmJDW5e2sIpiZGRgd6G/pXVWWGhle565rYt5dE47VomQjbi+l4WGbUlFZltggZaWq8Kpl6eXd3x2UlpaPFZcRWJ3YoGQdKGejbSipbeftbKevKauup+/p665p8Gbtqqqq5etjaaCnoGNf3FyXGlUWENcQllQZ2aEgZCinbOdt5CqiYNzXGo+XEVjc22pk62znKuUdHhVUWJFZ4SBmbSmrq2Fa3JXPV50an6xt6Wnq4hkTVlhVF+ErK2gl5eaiWZKPk93i5GUm6adoZmIcFlRR1JabYmZsLi/tquciXxvZmFoZ3N7i5ulsaypq5+XkY+LkJeRg3BjUVdTZGRaTEdIWmJQRkJVYVVEW29pVmmJhHmTrpycurKctaV5gGlEZU9PfnqgupqvendXSGhvrKWxg25QYHqssJhlV1agobFXXWWeuWxjYaK4YliBm6FMZ7qOSnmlf12Oo2plrYFPo6BCga9nfJRSm6VUlmlWr2WaklWdSpBteqVquWS4YbBmnmyVbJp1o2quYcBdv2OTemGTQqh4fLxTi3tStIxfn21YvoU9i61iXaWeWmimo09Wp6RtXmiLwY1jX0+RqqiubHRLV2FfjoGplryjw6C8nsKnuaqon4WSVmFPTYN6srKMfFtKlLOQelVborZiSZXBakijuVdmqH5rrGFStHWDpUaQa2+vZb9il3V3d2R9Y4VpfIBrmE2hQZNiYpNAkX5bsYRrvG9JkYVVjr9wUIGlhl92lpl9WWeOtqRvQmByeKTFo5WZfV51VkhgTkZfSVhdU3dykpuqvJWcWWVIdojAmnlCcYS/eGdPsZ5vY46ySHikdWCQmVSDplCQmlihenmKWbxMjpRrk1e8S5tbvVKbSLtdqkGYe5mTWJlPnpN0uFJ2jEOgkmC5lVKXkkx5nlpPlpFMYKaTS1eUoGM/ZY2ebktajre6jGRUaIKboZGCbGdSVmJ+nrq/sZ2Qm5aEamJvc2RTVmlsYGJ7iHyFn66cqcGrkZaHU1ZkSm6Yk6y0i21sP22NlruUaWpKgaCepl1WYI69inNBeKeliUpzgsR/Z1WlpI9IcaGkYlN7tIRZY7aOa0mmm3dLlqxyWYLAYF9/sXlEn5l2U4m+VFukkm9XrptCf6d/Ynqshz+VuVxnnJtxapyqWlmymUKEunlUgZ2KXm2mmk9wupY9cryLTHGqlmFtjaWAX2+erl5NkMSBQV+ur29ecpWek2xMba+zcEJlpKuPeWhcaKC+nWZMXYmaoaSddkJEb4iYo7S4j2hbZlxKU4CWm42mxLSimLGrlICJpJaFgpymi4qlt7Serb+6kIB/flc/Sm97gqC/rIRcYGRehLa3e1Nbf5qZm2tIcruqX0eUvIJJdKuTZG2lkGN9nIBllJRaiJllgq1fd6xSg7ZKmJtEpXlunGSpXZaGW7hFpmKPZZlhjn50jHt3kWGdbI1sqFayUKN7aK9Bt2h6olSgeGSieVi0Y226YXqaiE66iGFxwWNii7xUY4XAa1pttZRuV2yzmoxBaX2iun1xQlqCk8KikIRUXVpNdn+MsqKru6SfvZ+Vqp6IorSRmLSsnq24p4qGfmxKR2J/ho+mtJ51RElsm72se0pRf7K7llJJc5+fbWaYvKFla5yfVEiRnU9MkYxGYJ5rTJOZV3+vZn3FfXGyW1WgWXK7ZoqPRJeBdrZRhYhht1B/hG6uQJt9jX5huk6mYbBVkYJrlHmOba1Ku1ihX5ZepVWuVKxam3KGhHKXW6lRtVmhdXSfVbtHtGCAmEq4VZeGXatbnHF/n1Ozc1W6XX6cZ6Nqa7pndZtioJxBmolgu4RTmGlgu4Vrun5XqXRMmHRCjohCd5tLZaVlTKWLUJ2yaHGscEWLqWl+rnNDg8J1So2ja2mdilx+o49Zc6eKSInDZ1SYnoRbd7t2XHWnnkJ3kKpXaoO3blxlwopkSqCpd2BnuaNcZ3K1nkdfnqaLZVaOu4xFUaS1fE9fmKuSXV58tKZqSVyWuKl0TGCTn31ZQWaXpJFhS1+KppNdPkhznqudd2Nsgp2bjnllW3Wds6p+Rk5ym6CfroNHTm9pkMGtlohXUGBYiqGdt5CWaVtYTW1im4/CnrmImml1T11KU21fiHyWrZuyrZ27ppazmI6aj3F+jHhmfI+AaYCLk4GDkKKtq5ehra6+vKeVfGZRSU1SWG+Fmri5vauZe2deb3+YpqOAYkpScqa/r4NUPGqmvJxZQmizwXtCYKO2d1Fun5dxZ3mjl1Zvt4Y/kLNqao+UZmS4ek+zeGSTmk+RokSrfmqaglu+Q6CFaKZaiYploWaaco2Ce5NZvj6+UaFhoka2WaBdtz+tYppqjZNLqWKpW3GpW6ZdbLxZgo1Nqp5XmnpEoq1lfKNYS5WcY3e2oF9bkpRZQGWZlWhRa6CwnHJTYYKdr6OHYkw+T1xwi6K1tri4sqqbjYeCjJelq6mtnZ2fraGCXElGZ4GnqpiJe2BfdKCxh09TmruQQl+ttGFOprVgUrGjSHm8bUq6i0WrlUupg1qgaYOCZK1Tn41PuVSkbJRpkm94nlygdn6Gf36Bh2ylR8NFo4Fgt0GzcF/BQZ2LVKaAYZeSUZyZRqCOZGK3gk+XnXtKnqR3UH63jmlJnp+eTWRrsqmCWEt1jMGTkktgSn2Ds5+sjHZcT1NUbWWLgqqVtZ+6o8CVuZS0krCcqKSqrKutqLqktoiceYhRakBeSm15kqeotJuUZGhGb2OgpLuWfG1LZGupmriCYk9dkpu5hXNJY5ybvG1eT2y2o5taTHqOwoFiWmirnIRoRYumpJBIZZOkpWZKg5isnUxOh5Sjg0pll6aje0RapKuHd1pTnsONZl5meaq8e0dbfo6fooZUQ2efrpt/dlxXWIWvvKNwV1JeaHd/lqu5rJRzVktQWWV0dXyDjJOcpK20vcW7u7m0tKunpaCSkIN7bFdOSlFcbIudu760jnFZVHCRnI96VWqMuKVlP1+it39KaKidYmGUiGJ7pm1PrptBjLpacK9ih5Fdp2GArjyvY3akWadcomOtT7ZIsEynXqRjknN8nE6+TJyCXZd9VLxdcadxY52gRYS7cl9vo59WXZyam4RJUZilmqKQYkdaZFRgdZOLfn6HmZh6YU9QV154j5irnnZSP2KUsJFYaayucl6VrGNjo3ZFmH9atoB8ulKPZ2euZKxHoli6WZ5EwFyYY5mORLpqe6Bli5phhKVZaLppVoqfmEl6irt4YEh6krmapF9rQFVVUnBhg3Fug2Rma0dIaFt2sLeSjm1UU5fBnk9NlryAWIagVV+3kGapiU2cXlSlRIxvZpVMpUSXTppLn2OzY7tYnFtpnlyzamSlYpadRH23XlO3lUZ+unlDfZ+igjxvop6uW1dUb5qZvJujcntQXktVSFBYQF9CWl1IcXB4dISUf6FWl0qgZpyJeZVRnFyTh3uyZZxqY5BUm4NwtGWfjGCeX2+UTJGPZ7OBgbVqiJlQjX5VlmVjp2iDpmmVpGiji2OlbGSWVHORWZiRaq56fLNolI5Tl2Jwl1mihnmzapyAZJ1JjXF3pGa3aZVvb4pgqGGvYJZhgnKLjY+JdXR2kI6FhWyIaqtgnEyldZOGW6htnW9nsmyKgGaxdV+zf16cgWWTjWWBnHVfmKBZYKeXbmB0rJZkaWiYp4+BUGlniJ+eq5GXaXxTbE1lTWNOZ1RqWmx1fJ+YtJuJgE5meo+wlVlhhpOZaFmco2Zbq5BciZdkm4JPnX55pUyPY5CNhJlsl1+FXXt7c5xhq2KElleYeFeUdUuNn3B6rJdaV4uskWFOcKawlnhtbk9VcXRlf4JohHpgbU9Wamiclq+JeFprlqN+X2awjGZnq3pWqn1etmVxrFGVf4OAZqdojlqnc5ZyZphmtXaDn1GCjlJ0lF9ZkYtVVYqSb1hombOnil5OXnJ/fYWYqKGZoqySk5t6YXBXXIGDrJt5Z1aan5pOd4+dV3Okd2qMklWTiluidnuHaa5JoW+ZZoN7lnaNV5xirXaSj1ehWmuaUHSPUGeaaFuZnmhzqJpkS36srXhJX5Gwm4F6Y1Bdf3eQqZmurpmvnqOpl66es5KoiZZka1hbbX6lnZ2AV2J2ja+IVmaZnXxjb5WUZ26fl1tpqZJlkptSbpZnbad0f7BtiqpgnIloqFmDd1eeZKOEf41Wo2KsXIpgmoV5foKZZYd9lGCWdoCHe35+immsULVLqWmQgm6nUbVIr2SOiGueXpp3gI9onnGCjWufY46NW7BocqZSl4B5mV+ke1aubYWKXK91bphcoo5illiIoGWpa2yTUqGGfq5imn1bl02GfVqgWZeAaqhjpHSBn1+pZZJ5ZJhUmVKIaHqTba9ksF6eWoppfoGIlX+RZoxcjHaidZJofHWDkXqNUptdtGSZXH+SbqVOmXOBnlGcdoapVYiDcqxgYLB0dJdehbFkXaaGZ5GBXIqhaVujpV9Wlq55THOpm2VShrGYZk51qbCIY11xfJGZpJl4V0hefoeEj5ytt6STj4uZmpKBg4Wco6WdnZ2Zm5uQd1tSVmODo6+ohmdbbYubfl9UgKObeWiVsphsg62TZIqxhWeknGmcpGqNoVp+h0uOeGqycKGHYpxRo3CVhG2GZKJspFicY6xpjXORg2agbadWnYhcq2p/kGySfnSVeW2gdlyvc12cjmltrnBpcrNzaGKtjm5YdrCRg1dilZWkhltia3KmrJiPg11LXGtqaH6do5+XmKy3s6ekn5uTlZyXkYiAeGVsZ3KEnamjlnZcTGOCpbGVYk1rl7GOX2WAnY57YXOrl092poZsbpmcSY+dd1ykjFiMpVyDmm5wp1iAr1CSlVanem6ZZZ1wZq9lnl98m22qUphUjHmBmXiqbrBnsmy2arRpolyRWpNulYp6gVqrZ6JQn4BykmuiVZ2GXK9UkpFZs1WGjGiHjVWwY3ahaHmabnmgbmqjc2+afW6afGSfnVlfpIdjlZpbXJCQV2mkll92qpdjXZaUYFWFqo9pZ4+dfmVtkZ+LXGCWsn5maXWkr3FpWnOrmpxgZ1uYma2BeUppdJqvkpFnWGRkgqWfkJWAXVBpb3OGorW0m3xvaGNnZ2Zqen2Ii5iYnJmak4yOiYeDf31yaVxUXmVsZlJTZXFnT11sZV9ogGx1kX2Appaerpqxo5ugfIZkb1xbXGl1hpWipayMlGhtVFx8fKihnKF2XWRYdKWil5duUGSCm5eVhl5RcqKxmGhPZJqzm2lLZZm1mnNkfJiIYFB2oZ5uYYuxlWt1n6t7ZY+yiWB6ooJQbZt0T4WpgGaZo2Fkm4NdnqhpZJZtZ6+TWoCMXJafUnefbIeVTo6jYIqCZKhzWaxzeJNbrIBapWmDhWqyWoGSaZlbqnVqnmafW6lqcphylF+zUJdukmqKjWeQfY5iqGOTZ6FVoWuPXqlohn6RcHaVYpdoq06qZo5ti5JZo2afVZyGW6JrpGaCqFyXZpWUUaN1gZVQo4RilWaSmlGLiW2laGWpdn2iVXKgb4miVHGYYoq0a3igYV+lfGWslmGToVpuoGVXlIZNbZpmVJKCUmafbk+FpGhsrahmeKWASnWtiWmEom5Nkbl+U32vhlt4opBebaWWV22qllB5roxhaY2jal2dk3ZZjKxwanK4d2dxtIFkX7OGbG2golR3lJZrYKCoUGqnh1t+pXxggKd0T4qvcFeOmGh+rYBVhJZaZqd8XJ2gXYWpaXKeYlmVbl+okGidblushmmdaX6nTomhVpWHap5tiIBvmWqTfG6aYJ5nkH9xkGuWZp5ipVauZJFzk1ykb5hYrWqlSp94mYtfklGibYScZ7V1g6tpoJxqpItXj3hRlaFtgJdnYKSbWWeplGdqgZybWGCPlK11Z19znqCegm5nUnBih4iTsZqgsZqhta2bqrOnjomDfWhWUF2EnKqfeWpwmLicb22TsYNccJtwVpisYXGWZ4CgU4emUZl1goVzpFezTadYnWSXZp9ikHR2kmKcd3CsV3+uWHGvZ1qopFdgqaZuS3Ckro5lSVJwmq+0r6eYlIqFhoKFjZigoKSdkoNuZ297lJuIcV99m45cdaaHWJGkT4mmSaCHVbJNmHxymGShVqtcoWaOenWdUK1hfKlTl51NlqdScq6CT4Wthl1pkKSWfGtsZniFn6ywppeKf3t8fISTm6urpZyMbGBniqSif1dZgJ55WIGzjluGllpwsHV+n06ImGSdV4yQe4hZq1+aU7RcjHKSf2muUZqCaZZogJdkgJpjdqxsXaqOZGyWqFxpc6WjZWZblJexgHZUYmt/l5mwoKyUnoGOd4p9h36KjJSnmrGWrYqLX2RUYYCPso+RYWhmkK6Ngkx0jK2CUXSMrGddiaSGTIqfe16HsVpwmo5Zia5UhqBxb6N+XLhmcaBteaB0b65UlYlgnHpxm2p/pE+taoSYaJGIWbNVnHtvlGqGmFG0VZSHaKtck4Rzlm6IjmWZcICSZJV1cZtmjoJslmaGj2WlemirZ22vWnSpa3qWaoaaU36vZ16hhGWQhlN9r4JYg5tnX5W0gGR9o4lXV32chGFSbZabhmJMU3OPnaCQfm1mX2FfdIyapZyXnKyvnJSao4hxd2hNW3h2jbCWg3NLf5mcjVFuiLBoaH+nZW+Yl06hkVybfmueXZOEYa9Ym22iWJNwo1ieW7BzeIpRp4F8tXpmon5ThZtqUoGlkGxgh6WwmHlfXGJvZlxoendjXW9fR2R9f6mthXlOf6aPbVSkkWprr2V1pVWTiGCyT6VrgHCcY4xsr1qMfXC2b2CVblucpnR1nbWPaGmIn7WmlIBoY2xrb2dlbpCkm5eie1FpmJWXYWarh12Hm2V+oFefeHOiWa9Mp2GUaZhudK9SjJFpm4BWkbR1UHSYj2xicZCqubGbk4N6cG1qaHGIoa+qjGpkcoKSk3dWja5mX7RzYK5udJlpi4drnV+lVbBZpG5+nk2sbnWhaH2Yanyae2SLoH9VaZSuoIBfTU9kc4uQnp+koZacj4uIgHJoZmB7k66abE18spxZWqmbWniidmufhG2Tf2WmaIuLY65Qr1SyU6ldmmObaaNfpHRzqUqegmKcdHuQXIipX2SojmCJm2pmoK58VWmWkm9Sc52toYBocYmgq6KLbFZPUGByipyutqifj4GIiIl8aGl7e3RocYePf4ufopGmsJqSpotqd2hRZWdtlpCmtpOUb1lhUnqBoKmbm2VwTXR4oaKmhHJeWWeMmKyTj2NkU4SBsJygfVtlT4F+qKKTkGdlWF59fKako6x9hGtWa1dceXCUoJKtoJutlJGjhoiQfYaPe4mQgZyTiqqkmrSklaB/bG5VVHt0lq2XknhTYIGRtI9eZm2ZrHJbd42fZ1GfnWhxkJ1fe7NXb6pmd51sdp1gjo5nolWdd3yRbJxeoV6iaZByh41pnFyoZ32dVaVucZ2DXrB/W56OcFufomBoh6GhYlV4hKerfHVwVlFyc3CGmoWCiZN8ZmRtZVtghKCxnG1NWZKwlWd1opdZZpVpVo59VJxnZJRRhW9wkGmpaa9foliJb4qaYp1Tjp9ei4lmkpFmgZuNZWCfp2tdZX2sm5tyZ1peaWdzdn2HcX5ed1VTYlyNopybflNimJ51YXukhFiFsnJclmNnr3KRoG2wZqJzl4OOh46Gk2KcR5dxhp9MjotqnYFVnp2Sj4mGgXxwZVxbXWZ6ipmjqqShnZCXmJiZlop9bWlhWF5baGxnYmRcVFleaWt5gIKCh36FgIiOlqSpqaqnqJqYlJSWm5qXmZGGdm5hXlJVWFxlbXd/iZCNj5mZlJCKhn1ybWRjbnN9kJiUkIB5bWlsfpCiqJ99Y1FXaIecln9nbIGdsaF6Y1Rfeo6Pk6WolnNiZmlqcJqypXxjYHSCjpuMbVxqm6mFVluUs4RTZ6Cma1eFrX9Ve6F6Z5CDZpGmWmimfG2XZ3CycHCVaJ+KVZdlmo5hmWOsbIFzdJp0kVaebahek2Kgd4xwa5hsqFWHdX2pW4l7bq1wcpRniKdbb6BxdaCETYWwhGF/nYVogZuLa2OEoZl8ZWqAmJ+NhnxwZWFrg52uq5eTk5eajn93eoaSkomKk6Gyq56DdHBra2dzhZujkWxXYoqglXhleJKSaWqVonBRdqiEaYuRWWiljGydfFSRj2+tfmOWXoOfaqhpdIteqGilaXl8aptyp2GYT5RgpW2lYJFkf4WBoGyfWZNoeqBsrmd9h1Wae3mtZX6OU4ada6CfXoGPU4Coc3ajgFJ9lmttqJhncJl6VXajmWp2mpBhUn6nknFxlZ51VFqHp5BwaYOblWlRXoirpoZia3uXlHlfYXaar6WFYVJnhJydkXlucX2SmJB4WlprhqaxpIJiVlp0kZ2ZiXBodIiZo5d3XE5ceZ6tpY5sYHCKl5R6YFdgiKermn1jc4yakm9VVHSXoIlpa4yqpX5jaJGVeVVchp+IZ2ygqIBmia2TXWmVi11YkY1abqCUZ4qthHKpmF+Inl1xmWZkkmllm2lxpmWKomqmjHOzbZWPZ6RgknZ1j1WZUpBcjWCBdYJ3g35/gYt8mnGkca5sq3qTkm6nZp6Dcadkh4tblXtalW1blHBWiYBRfJJgWIeJV1qRjF9VepuDX1h+oJRwV2J9nJ+HbWBZZHWQm52YjYZ3c2FbWFVbU1RSU1VXVmBla3yCk5OWjoJoVFFZd4yYh2xXXHuWkW1UdJ+fdF2HpYxqiqmIZ5iqb4Ksfm6rgmuhgmCiaGiUVYqAV5tYi3dtl1mgZJ9zlIKLjYOWfZF+gn98gWmOWZdPkV5+g2KjYpuKebNrlJlnoXVgnV9jml5snm5ppINqo55qhKRwXIqSWFyOi19moKN0aZamhWFsj5VsUmORoYducJenm3ZaXHqQj3ZmX32dsKmNcF9edpGbkX9uamx9kKWgmH9qVFlgfJSkqqyagmRXVVdpgZqqrKqchmlYUVpoc4uWqKOfjIVvZ2lqaHh7iY6ampCMiHhwamBrcYWaoKaVg29bWGJ5j6GknYxtV1pohJuonoJnXGmGm5mHc2l0iJaamJqWjH56b21janCGkpeclIRnWFZdfJmrpZt8ZnCKpqiMaVZoi5mDWVZ3lpFkY4qliml7p5xufKOVZX6jel2Lj1B4k15mmGNun2J4nF2YjW2pa5OYb7JnoHyMmHWia65oqWCiXKReoVyeW4ptdYNZl1iPdGKWV4J/T5VxWJdrVpJ4VoqJU2eYeVB5mHhQaJOQa1Frj5p/WVJthJePfGRRU15ue4iSmJqQkImMiIKEiYWLkZiWl5WTgHRjXl50hZ2nl3xpbIirpYJsfqWte2OPrYpif512WY2IUHSSVGmWXm+aXIqNXKJuiJlpr22chISUbKFgnlSbT5pTllaVZI52fJFuq2ipfoSoZJt7aJpYcY1UgpBeiqNniLF2eKiKZIKecFmDkmdcgaWHaXahrYJlcpScfFlSdJGgkXpqc42epZV3W09Ua36WqqimjnxqYlZZXmt5g5qnp7CzqqCXkoeHiIaIkZaWjIaHfX58gYmZmaarp6qinJSWkZaako6DcGNZU1VYYHaBjpaZmJWUkZKThYN5ZltRWlt1iZikr6WeloJ9dXRqbmlgY2Zqe4uhrK2ooJOPi4iMh31zYVhZWGJmbmdhWlxXZXBxcnFmWFheZG5tY19XVFlgc3d8gn6LlaWsrZaEZVxcX3OHlpubkoZ0ZW5zh5eRgXFpd5SSh2dni6WVaVV9radzXn6cgGmLondMgKh6baF/UIGja4ibV26dcJCiWIeCZbJvhIBZo2icgGyEYadpqFOTWaZxo1eUWaxlqFyIc4CnYptagpNtp2xtl2eSn1J9nG2MpWJcm5Jnd5d6ZIWlh1telKyHVVt/qaWEYFhuiZqYnJeOc1tVXm1xc3B8jpeOfoWWlIV0bW5xYFRVd5WalpKRh2NWa5CvoGhXbZ6kfVZonqZuVo2yeVWIp3VsmH1jpI1NkptfiX9iq3hknmWiel6jaKBkeY92mk6faqZXlGOvZZNarGibVKRzk2p1nGObWJ+DaZJkqXxhnWqJjlealFWRhW2afFuiilKGpWZsnoBmiYtvdZ6CZ4SbfGSFooNhdpSLcmyEmo11YHmhmWZSiqqWZWB/kpmMdlxtpK6DYWN9hJehflFbiZ+YkoZdUoCgoZGFalVkm6mRhHpfVIGimY6IclFhkKCUmIJcWXuTl5ySaExri5mclmpVapOXmoxrV3mhn5+YlJOPjIB0YVlSWG2NoKall4J3al5ncYCVnJKMeWppeYOUloZwbHaTnIpqXXGaqIlaWH+om25jgph3WX6vjl5tmopjiK5xVIuPYpGpX26TZ36tZIGLV5SRdKpido9ir3CQcWeYZrNln0+aaqlxk1ySYKplpVOPboiZbplXjId5rGN3kWWckVeLh2eUpmFlmIxqi5xtXYeyklxXjK2eb05klK+hf11cZ36OkZakqJ2FcW53em9hYW16eHNxip6qpJGMiH9jVmCLqqh8V1h/o5ZyWHqlmV9boKRhWJaWZ4yOXoGoZnKbbJWJUJ9wjJBXnWeiaH2CgphejW2maYRtkY5wiV+uZJBwe65biH1usGpopG6Dl2N9sG9Tlp9pa5aQbHiSjG1oip+JbWGEop1oTW6aqJB9cWNeaYunoZCQk3NdW2ZmVl92g250ipaBfpCRhHKBh25fZ3BaUV14d3SRq6aVkIhwV2F4g46iroNgWnJ7jKqhb1JqlJ6Yh2xYeq6db1V9npF/a2uGpJNaYp6sclWDopFpaImZhGVvl6FtWJOpcU2Ksn9Qg6N+YHuYiG9tkZt4X4SjelqDsIBUfayDV36iim1xiZeHXnSjll1hnJ9xZnuUlnhUd6qeZV6HlJiBW16aqn5taHCUs41nZ259oa2Abmlbb6WolpF4VVtvbYiinZqnjnaBcFJiYFhhdGJqg3B2i3p2hXdpfHFZZmBMaGlpg5KMqKuOg3hVX4SGoaZ6Xm1ukrKJYWh6nJ1gWJqcc2h7moRbhKxeZrJ1YaaEXaCBYqZ0a6hajZVWrmmEj3GQbqBSslibbJdmplihYpdnol6Qj1msX5GMXqJ0cqdifqNed6dccqxuYZaVdmOCqXVYipOddlF8mZmdblhwb5ajmpt2Zm1SZGhcgHF9jXmNiniMeXd+XWphVW9ohqGVp4xzbVN9k5mfbVp1iKh9V3mQnGlVoJFsaI2bVH2nZHiYdG6QiWGjdmimWJCVW69aioxfrVSgcI2DfYJ9goCGcZdfnWeMeXaQZJxjo2mWdoGSaZNpg4hqnnF/nlmdfl2zX3udYoKSc3Klb2avaHWWh2J+p1h1l4NkfLJlaYyjcVmij3paj6BvbHCve2hnk6dlbXWtkW5ohaqEb1iTpI5sVJSYoWFpd5yiamdnp5iKV2iOopRea3Kpk35acI+NlK6ojIyDZVFncGqOpKGXn4NjZGlcc5yhmZiEXlxwcpCvoXhyZVd8p5qNfWJXiqeQgXBYga6Wbmt0i6OGUHOnlW1uhZyHZHCmlFB6qnZblJhkeZx1a5aEaY2OYZOMXJp5YKlrcK1SjYhjnG6caJWCaKRcnmikV6xilWyeU69clGiXYZGNXqlcjoRqlmiMhGqSfm2TfmiUimmAnHxVn6Vfa6GTe110rp1ubWuCspl7cFdsiYikqpOcg3B9X1xuUV5rTl9qVHRtbpOLm7OTjX5VY3KAr5l4blePq4JxZIutbGKUkG5vl49XlJxTlJNPpHphqViNkFuvUpp4g4h3gIGCdI1tjXl0m1mvX5OAbp9fjItlp3Rur2JxrGVvm35ne69wWJSbhmNsq418YWuinZJvV3Z0oamSjmBnW1+AdJSUla+ar5uirZCpmKKrlrOXoZaBhV9rV1x2cZuZoZNub1V9iaCka2xbjJ2SeE2AlZ1xWJKUlFhxoY1pX6iFXn2Xi1Ockmh6nHlWr3ZklY9li4+RZ4Kca3GeeGqahGeOimeHjm2Dj29+kXN7jnGBkXOCiW2HiG2Jhm2SfHGXdnWZan2WZoyPZpWCaJx4a6BvcaFoe5liiZhfjo9flYplloNkmoJkmYNim4VimYZjl45ji5BngJJ2dY6Db3uTgGaMlWRxoINohI6Fc3GWlGpxkYt8cXKTmXBwd4aah2pxfoScjHFxanSVk5GRdm1zaG2JhZCgkY+WhYaHeHmBb3R9dHqDeISNh5aajZaTfn9wYXV+gJyTgXxpaZCYi3xmcpmQdHR/lItjfKF1Z5SKa4OPb36NdoKQb4mHb5drhZFimHGKd4d4hIZxi31/hX5/fI5mm22Dhm+QcoWCcot8eJB8coyIb32Xf2eLmnJtiIyKc2aEmYyEc2OBi46bjXl6a2Nxb3CEgYGRiIeTh3+LenZ3bGZ1bH+SkJGPdnBydJGXgG9zfZiPZnWRiXdyhpdycpl+aJeKZJSIZJODaZpwe5ZmkHl+hXmNa5lokHyCdY90iICBeJVqmHOOc5B1fZBnmHV6k3CIgneNenqKdYCLd3qOenKNhG2Gkmx3m3tsh5CBcXiRjWp3lop5cneUknZteoaVimx0f4iYjHJydXqVkYR9bmmBiIyah3d5am5/gIubjYiEb211a3mJhZSZjIuFcHNvZHJ7doqSjJqRhY2CdHVtaHNzdIeHiJiSjJKAeXxvaXRtdIeCjJaOkI15dnZpcYB/jJiJjYRxcm9ug42Mkohvc3N2jpWJim9rfoSNkXpqen6OlHRrfomPh2t3kop7dHuTimt3k4Jwe4qFcHqWfGySh2aLjGqIjGuJjGePg22Xc3eTa4yCe4l0jW6QdICIdop8h3OSbY93gnyHeX2PaZNzhIN9iHGMfHiUcX+ScICQc3qSfHOGinxwh5N2a4uPhXlshJWHfXVqe42Lkol0dnJrdX13h4qEjY+Fko6Fj4Z7gHdqdm90ioyMk35xdXaJl4FyeH+Oi2t3lYRygouAc4eMcn6MdYSKcop+fIhzjnWFhnKTcIp0kmyYb413kHGPd3qNbo56goV1i3d8jXSCjXh+i4B2hY15co+LbHeLi4JxdI6SfXd0dZCRh4Nzand3gZGPipOJgYd3eH5wc3tvcXhwd395gIiGkJOKi4d4eHNsf4aKkYd1dHZ7lIx8dnV/lIZxd3+NiXFxjol1doWKf2+JknF2k31wiYd0fot9d4iBdIeEdYiHdIeGc4uAeIx5gId2in55jHSFi2+SfHaSb4iEc453hHx+iXOQeX6PbJB7f4Z5iHaOdoCObI95gYh3inSLdoOKb5J2gYd3iXaJfH6LbpJ5eJJwin93i3WFgHuIdIiBdI56eJNygo1vholuiYlvjoZtjYdth4lwg452fYt/dn+Lf3SFkHN1jod0eIWNgm1+kId8dXmMjn12eHmKjoB8dm9+hYiPin99dm92dnWCgICMh4mQiYuRiImNhoOGfXl6b3N7dYONio2IdnV6fY+QfHZ5f4+FcnmJhXx0g413dJF/co2EcIyEcoyAdJF2f4tzi3iGeoZ+fI11iXmDeol3hId2i3aJeoSCeI56fYx2gY51fI19d4SGfHeEjXhzhYmFfXF7jIiDf3F1f36IkIiJiXt/fXR6eXF5eXJ6fHiDhoaPjYOFeHF7foWPhHd5eoaPfnGBh4Z8dYeIc32PeHeNfXaOf3eMenyNc4WFdY13hX+Bf3yJco11h3iLcY90hn2DfYCFco52hIV3iHqCg3uFgHyHfnuGfXqEg3mBinx1ioRxgY5+eH2Find0h4p/eXiBjYN3eXqEjoJ5enaAjIeFg3V1fH2Ej4aIg3d5eXN7gICJi4aMiYKEgXd8eHJ5dXN8eneBfX2DgoGIhYOLh4eNiIeNiIiOh4mNiIiNhoqLh4mNh4mLhYyLhYuKh4yLhouMhoyLiI2Ih42KhYqHgoiDgYR+en53eHt1dXp2fIJ/g4mHioyCgX93eHp3gIaEi4h9e3h1gIeGiX92eXyDjIV6enqEjYB3foGHhXd6i4V5e4OHfnaGiHR/i3l6iYB5iIB4h4B6iXx9inaFhXeLeYKDfYV8h3aLeIR8g3qJeIZ7h3eMd4SCeod6hH2Bg3mHf3iIf3mJf3iEhX17hIV5eYqFeXyChYZ8dn6Dh4l+eXx3fYWEh4uGhYeBgYN9gIN/goeDiImEhoN6enl4gYeGg3x3f4aDgHl8ioJ2gId/fIKFfX2GfX2HfX+DeoV9gIJ5inaGf4F/g3yCgIB+hXeIeoR9goB8iHiChXeEhHiGg3iEhnl+hIJ9fISGe3qFhYJ9eH+HhYF+d3uAgoeJg4KAeXt6eHt9en5+fH99e358eXt6eH19f4WGhYiAe3x5fYWGhIJ5eoGEhYJ4fIaEf3x+h4N4foeBe3+EgXp/hn18h396h4J4hoJ4hoF5h397iHt9hniCgnqFfYGBfYN7hIB8h3iGf4CDfYJ7hnmEgH6DfoJ9hniHe4J/gn6CgXyFfIN+hHqHeoR9hHuFe4J/gH6Df4CDfIN+gX2GeoV8g3yFeYV9gn+BfoCDe4Z8hH2Ee4WAfoN8hHyEfYKAfIZ6g39+gn2DfYGCe4V+fYZ6gYR6hIJ6hYB7hYB7hYB6hIJ6goR8foOBfX6Egnx+hoF8f4KEgXt+hIKAfnt/hYOBf3t9gICEhYKBf3t9fXt+f36BgICCgoCCgH+Af31+fHx+fn+Eg4KCfXx+f4KFgH1+f4OCfH2Egn9+gYN+foSAfISAfISAfYR+f4N9gn+Bf4CCfIR9g36DfIR9gYCAgICCfIN/foR9gIN8gYN8gIR9foOBfn+Cg398gYOBgH1+goOCgn99fn1+gYGBg4KChIKDhIKChIGBgn9/f3x+gIGDg39+f3+Dgn9+f4GCf32Cgn2Agn9+gYF+gYB/gYB/gn6BgX2DfoGBf4F/gX6DfoJ/gX6CfoGBf4F/gX+Bf3+CfoGBfoKBfoKAfYKBfoGCfn+BgH9/gYF+f4KBf3+AgYF/foCBgYF/f4CAgoJ/f39+gIGBgoGAgH9+f39/gICAgYGBgYGBgYCAgICAgICAgH+AgH+AgICAgYCBgYCBgYGBgYCBgYCAgH9/f39/gICAgICBgYGBgICAf3+Af3+AgICBgIGBgICAgICAf4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==";
  let lastSparkleAt = 0;
  let isMouseTrailActive = false;

  if (window.retrofyPage) {
    return;
  }

  window.retrofyPage = {
    enable,
    browser,
    desktop,
    export: exportHtml,
    disable
  };

  async function enable(_pageUrl, mode = "soft") {
    await showFakeLoader();
    document.documentElement.classList.add(rootClass);
    document.documentElement.classList.remove(browserClass, desktopClass);
    setMode(mode);
    document.getElementById(browserId)?.remove();
    document.getElementById(desktopId)?.remove();

    if (mode === "pure-html") {
      document.getElementById(chromeId)?.remove();
      document.getElementById(effectsId)?.remove();
      disableMouseTrail();
      return;
    }

    addRetroChrome();
    addRetroEffects();
    enableMouseTrail();
    playDialUpSound();
  }

  async function browser(pageUrl, mode = "soft") {
    await showFakeLoader();
    document.documentElement.classList.add(rootClass, browserClass);
    setMode(mode);
    document.getElementById(chromeId)?.remove();
    addRetroBrowser(pageUrl);

    if (mode === "pure-html") {
      document.getElementById(effectsId)?.remove();
      disableMouseTrail();
      return;
    }

    addRetroEffects();
    enableMouseTrail();
  }

  async function desktop(pageUrl, mode = "soft", cssText = "") {
    await showFakeLoader();
    document.documentElement.classList.add(rootClass, desktopClass);
    document.documentElement.classList.remove(browserClass);
    setMode(mode);
    document.getElementById(chromeId)?.remove();
    document.getElementById(browserId)?.remove();
    addWin95Desktop(pageUrl, mode, cssText);
    addRetroEffects();
    enableMouseTrail();
  }

  function disable() {
    document.documentElement.classList.remove(rootClass, browserClass, desktopClass);
    document.documentElement.classList.remove(...modeClasses);
    document.getElementById(chromeId)?.remove();
    document.getElementById(browserId)?.remove();
    document.getElementById(desktopId)?.remove();
    document.getElementById(effectsId)?.remove();
    document.getElementById(loaderId)?.remove();
    document.querySelectorAll(`.${sparkleClass}`).forEach((sparkle) => sparkle.remove());
    disableMouseTrail();
  }

  function exportHtml(_pageUrl, mode = "soft", cssText = "") {
    const clone = document.documentElement.cloneNode(true);
    const exportMode = modeClasses.includes(`retrofy-mode-${mode}`) ? mode : "soft";

    clone.classList.add(rootClass, `retrofy-mode-${exportMode}`);
    clone.classList.remove(browserClass);
    clone.querySelector(`#${loaderId}`)?.remove();
    clone.querySelectorAll(`.${sparkleClass}`).forEach((sparkle) => sparkle.remove());

    if (exportMode === "pure-html") {
      clone.querySelector(`#${chromeId}`)?.remove();
      clone.querySelector(`#${effectsId}`)?.remove();
    } else {
      ensureExportChrome(clone, exportMode);
      ensureExportEffects(clone);
    }

    let head = clone.querySelector("head");

    if (!head) {
      head = document.createElement("head");
      clone.insertBefore(head, clone.firstChild);
    }
    const base = document.createElement("base");
    base.href = location.href;
    const style = document.createElement("style");
    style.textContent = cssText;
    const note = document.createComment(" Exported with Retrofy Page. No external Retrofy assets are required. ");

    head.prepend(note);
    head.prepend(style);
    head.prepend(base);

    const html = `<!doctype html>\n${clone.outerHTML}`;
    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${getExportFilename()}-retrofy.htm`;
    document.body.append(link);
    link.click();

    window.setTimeout(() => {
      URL.revokeObjectURL(link.href);
      link.remove();
    }, 1000);
  }

  function setMode(mode) {
    const normalizedMode = modeClasses.includes(`retrofy-mode-${mode}`) ? mode : "soft";
    document.documentElement.classList.remove(...modeClasses);
    document.documentElement.classList.add(`retrofy-mode-${normalizedMode}`);
  }

  function showFakeLoader() {
    if (!document.body) {
      return Promise.resolve();
    }

    document.getElementById(loaderId)?.remove();

    const loader = document.createElement("div");
    loader.id = loaderId;
    loader.setAttribute("role", "status");
    loader.setAttribute("aria-live", "polite");
    loader.innerHTML = `
      <div class="retrofy-loader-window">
        <div class="retrofy-loader-title">Dial-up connection</div>
        <div class="retrofy-loader-copy">Loading... 28.8 kbps</div>
        <div class="retrofy-loader-bar"><span></span></div>
        <div class="retrofy-loader-details">Handshaking with nostalgia server...</div>
      </div>
    `;

    document.body.append(loader);

    return new Promise((resolve) => {
      window.setTimeout(() => {
        loader.remove();
        resolve();
      }, 1550);
    });
  }

  function addRetroChrome() {
    if (document.getElementById(chromeId) || !document.body) {
      return;
    }

    const chrome = document.createElement("div");
    chrome.id = chromeId;
    chrome.setAttribute("aria-hidden", "true");
    chrome.innerHTML = `
      <div class="retrofy-page-marquee"><span>WELCOME TO MY PAGE - Best viewed in 800x600 - Sign my guestbook!</span></div>
      <div class="retrofy-chaos-strip"><span>COOL LINKS - FREE MIDI - WEB RING - EMAIL ME - HOT NEW SITE</span></div>
      <div class="retrofy-page-banner"><span class="retrofy-page-blink">New!</span> Best viewed in 800x600</div>
      <div class="retrofy-page-corner">
        <div class="retrofy-page-worker" title="Under construction"></div>
        <strong>UNDER CONSTRUCTION</strong>
        <span>Visitor #000042</span>
      </div>
    `;

    document.body.prepend(chrome);
  }

  function addRetroEffects() {
    if (document.getElementById(effectsId) || !document.body) {
      return;
    }

    const effects = document.createElement("div");
    effects.id = effectsId;
    effects.setAttribute("aria-hidden", "true");
    effects.innerHTML = getRetroEffectsMarkup();

    document.body.append(effects);
  }

  function ensureExportChrome(clone, mode) {
    if (clone.querySelector(`#${chromeId}`)) {
      return;
    }

    const body = clone.querySelector("body");

    if (!body) {
      return;
    }

    const chrome = document.createElement("div");
    chrome.id = chromeId;
    chrome.setAttribute("aria-hidden", "true");
    chrome.innerHTML = `
      <div class="retrofy-page-marquee"><span>WELCOME TO MY PAGE - Best viewed in 800x600 - Sign my guestbook!</span></div>
      ${mode === "chaos" ? `<div class="retrofy-chaos-strip"><span>COOL LINKS - FREE MIDI - WEB RING - EMAIL ME - HOT NEW SITE</span></div>` : ""}
      <div class="retrofy-page-banner"><span class="retrofy-page-blink">New!</span> Best viewed in 800x600</div>
      <div class="retrofy-page-corner">
        <div class="retrofy-page-worker" title="Under construction"></div>
        <strong>UNDER CONSTRUCTION</strong>
        <span>Visitor #000042</span>
      </div>
    `;
    body.prepend(chrome);
  }

  function ensureExportEffects(clone) {
    if (clone.querySelector(`#${effectsId}`)) {
      return;
    }

    const body = clone.querySelector("body");

    if (!body) {
      return;
    }

    const effects = document.createElement("div");
    effects.id = effectsId;
    effects.setAttribute("aria-hidden", "true");
    effects.innerHTML = getRetroEffectsMarkup();
    body.append(effects);
  }

  function getRetroEffectsMarkup() {
    return `
      <svg class="retrofy-page-filter-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="retrofy-page-posterize" color-interpolation-filters="sRGB">
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1"></feFuncR>
            <feFuncG type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1"></feFuncG>
            <feFuncB type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1"></feFuncB>
          </feComponentTransfer>
        </filter>
      </svg>
      <div class="retrofy-page-crt"></div>
      <div class="retrofy-page-crt-flicker"></div>
    `;
  }

  function addRetroBrowser(pageUrl) {
    const existingFrame = document.getElementById(browserId);

    if (existingFrame) {
      updateBrowserAddress(pageUrl || location.href);
      updateBrowserStatus("Done");
      return;
    }

    if (!document.body) {
      return;
    }

    const frame = document.createElement("div");
    frame.id = browserId;
    frame.innerHTML = `
      <div class="retrofy-browser-titlebar">
        <span class="retrofy-page-rainbow">Retro Browser 0.9</span>
        <span class="retrofy-browser-window-buttons" aria-label="Window controls">
          <span title="Minimize">_</span>
          <span title="Maximize">[]</span>
          <button type="button" data-retrofy-browser-action="close" title="Close Retro Browser">X</button>
        </span>
      </div>
      <div class="retrofy-browser-menubar">File&nbsp;&nbsp;Edit&nbsp;&nbsp;View&nbsp;&nbsp;Go&nbsp;&nbsp;Bookmarks&nbsp;&nbsp;Help</div>
      <div class="retrofy-browser-toolbar">
        <button type="button" data-retrofy-browser-action="back">Back</button>
        <button type="button" data-retrofy-browser-action="forward">Forward</button>
        <button type="button" data-retrofy-browser-action="stop">Stop</button>
        <button type="button" data-retrofy-browser-action="refresh">Refresh</button>
        <button type="button" data-retrofy-browser-action="home">Home</button>
      </div>
      <div class="retrofy-browser-address">
        <span>Address</span>
        <input type="text" value="${escapeAttribute(pageUrl || location.href)}" aria-label="Retro Browser address">
      </div>
      <div class="retrofy-browser-status">Done</div>
    `;

    frame.addEventListener("click", handleBrowserClick);
    frame.addEventListener("keydown", handleBrowserKeydown);
    document.body.prepend(frame);
  }

  function addWin95Desktop(pageUrl, mode, cssText) {
    document.getElementById(desktopId)?.remove();

    if (!document.body) {
      return;
    }

    const desktop = document.createElement("div");
    desktop.id = desktopId;
    desktop.innerHTML = `
      <div class="retrofy-win95-icon">
        <div class="retrofy-win95-icon-art"></div>
        <span>My Page</span>
      </div>
      <div class="retrofy-win95-window" style="left: 48px; top: 46px; width: min(860px, calc(100vw - 96px)); height: min(620px, calc(100vh - 116px));">
        <div class="retrofy-win95-titlebar" data-retrofy-drag-handle>
          <span>${escapeAttribute(document.title || "Current Page")}</span>
          <button type="button" data-retrofy-desktop-close title="Close">X</button>
        </div>
        <div class="retrofy-win95-menubar">File&nbsp;&nbsp;Edit&nbsp;&nbsp;View&nbsp;&nbsp;Window&nbsp;&nbsp;Help</div>
        <div class="retrofy-win95-address">Address: ${escapeAttribute(pageUrl || location.href)}</div>
        <iframe title="Retro desktop page snapshot" sandbox="" srcdoc="${escapeAttribute(getDesktopSnapshot(mode, cssText))}"></iframe>
        <div class="retrofy-win95-resizer" data-retrofy-resize-handle></div>
      </div>
      <div class="retrofy-win95-taskbar">
        <button type="button">Start</button>
        <span>Retrofy Page</span>
        <time>${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time>
      </div>
    `;

    desktop.querySelector("[data-retrofy-desktop-close]")?.addEventListener("click", () => {
      disable();
      chrome.runtime?.sendMessage?.({ type: "retrofy:removeCss" });
    });

    makeDesktopWindowInteractive(desktop);
    document.body.append(desktop);
  }

  function getDesktopSnapshot(mode, cssText) {
    const clone = document.documentElement.cloneNode(true);
    const snapshotMode = modeClasses.includes(`retrofy-mode-${mode}`) ? mode : "soft";
    clone.classList.add(rootClass, `retrofy-mode-${snapshotMode}`);
    clone.classList.remove(browserClass, desktopClass);
    clone.querySelector(`#${loaderId}`)?.remove();
    clone.querySelector(`#${desktopId}`)?.remove();
    clone.querySelector(`#${browserId}`)?.remove();
    clone.querySelectorAll(`.${sparkleClass}`).forEach((sparkle) => sparkle.remove());

    if (snapshotMode === "pure-html") {
      clone.querySelector(`#${chromeId}`)?.remove();
      clone.querySelector(`#${effectsId}`)?.remove();
    } else {
      ensureExportChrome(clone, snapshotMode);
      ensureExportEffects(clone);
    }

    let head = clone.querySelector("head");

    if (!head) {
      head = document.createElement("head");
      clone.insertBefore(head, clone.firstChild);
    }

    const base = document.createElement("base");
    base.href = location.href;
    const style = document.createElement("style");
    style.textContent = cssText;
    head.prepend(style);
    head.prepend(base);

    return `<!doctype html>\n${clone.outerHTML}`;
  }

  function makeDesktopWindowInteractive(desktop) {
    const win = desktop.querySelector(".retrofy-win95-window");
    const dragHandle = desktop.querySelector("[data-retrofy-drag-handle]");
    const resizeHandle = desktop.querySelector("[data-retrofy-resize-handle]");

    dragHandle?.addEventListener("mousedown", (event) => {
      event.preventDefault();
      const rect = win.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      const move = (moveEvent) => {
        const maxLeft = window.innerWidth - 120;
        const maxTop = window.innerHeight - 90;
        win.style.left = `${Math.max(0, Math.min(maxLeft, moveEvent.clientX - offsetX))}px`;
        win.style.top = `${Math.max(0, Math.min(maxTop, moveEvent.clientY - offsetY))}px`;
      };

      const stop = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
      };

      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", stop);
    });

    resizeHandle?.addEventListener("mousedown", (event) => {
      event.preventDefault();
      const rect = win.getBoundingClientRect();
      const startX = event.clientX;
      const startY = event.clientY;

      const resize = (moveEvent) => {
        const width = Math.max(320, Math.min(window.innerWidth - rect.left - 8, rect.width + moveEvent.clientX - startX));
        const height = Math.max(240, Math.min(window.innerHeight - rect.top - 34, rect.height + moveEvent.clientY - startY));
        win.style.width = `${width}px`;
        win.style.height = `${height}px`;
      };

      const stop = () => {
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", stop);
      };

      document.addEventListener("mousemove", resize);
      document.addEventListener("mouseup", stop);
    });
  }

  function handleBrowserClick(event) {
    const button = event.target.closest("[data-retrofy-browser-action]");

    if (!button) {
      return;
    }

    event.preventDefault();
    runBrowserAction(button.dataset.retrofyBrowserAction);
  }

  function handleBrowserKeydown(event) {
    if (event.key !== "Enter" || !event.target.matches(".retrofy-browser-address input")) {
      return;
    }

    event.preventDefault();
    goToAddress(event.target.value);
  }

  function runBrowserAction(action) {
    if (action === "back") {
      navigateWithNotice(() => history.back());
      return;
    }

    if (action === "forward") {
      navigateWithNotice(() => history.forward());
      return;
    }

    if (action === "stop") {
      window.stop();
      updateBrowserStatus("Stopped");
      return;
    }

    if (action === "refresh") {
      navigateWithNotice(() => location.reload());
      return;
    }

    if (action === "home") {
      navigateWithNotice(() => location.assign(location.origin));
      return;
    }

    if (action === "close") {
      disable();
      chrome.runtime?.sendMessage?.({ type: "retrofy:removeCss" });
    }
  }

  function goToAddress(value) {
    const url = normalizeAddress(value);

    if (!url) {
      updateBrowserStatus("Invalid address");
      return;
    }

    navigateWithNotice(() => location.assign(url));
  }

  function navigateWithNotice(navigate) {
    updateBrowserStatus("Loading... reopen Retro Browser from the popup if the frame disappears.");
    window.setTimeout(navigate, 250);
  }

  function enableMouseTrail() {
    if (isMouseTrailActive) {
      return;
    }

    isMouseTrailActive = true;
    document.addEventListener("mousemove", addSparkle);
  }

  function disableMouseTrail() {
    if (!isMouseTrailActive) {
      return;
    }

    isMouseTrailActive = false;
    document.removeEventListener("mousemove", addSparkle);
  }

  function playDialUpSound() {
    const audio = new Audio(`data:audio/wav;base64,${dialUpSoundBase64}`);
    audio.volume = 0.22;
    audio.play().catch(() => {
      updateBrowserStatus("Sound blocked by this page.");
    });
  }

  function addSparkle(event) {
    const now = Date.now();

    if (now - lastSparkleAt < 55 || !document.documentElement.classList.contains(rootClass)) {
      return;
    }

    lastSparkleAt = now;

    const sparkle = document.createElement("span");
    sparkle.className = sparkleClass;
    sparkle.textContent = "*";
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;
    document.body.append(sparkle);

    window.setTimeout(() => sparkle.remove(), 700);
  }

  function normalizeAddress(value) {
    const trimmedValue = String(value || "").trim();

    if (!trimmedValue) {
      return "";
    }

    try {
      return new URL(trimmedValue).href;
    } catch {
      try {
        return new URL(`https://${trimmedValue}`).href;
      } catch {
        return "";
      }
    }
  }

  function updateBrowserStatus(message) {
    const status = document.querySelector("#retrofy-browser-frame .retrofy-browser-status");

    if (status) {
      status.textContent = message;
    }
  }

  function updateBrowserAddress(pageUrl) {
    const address = document.querySelector("#retrofy-browser-frame .retrofy-browser-address input");

    if (address) {
      address.value = pageUrl;
    }
  }

  function escapeAttribute(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("\"", "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function getExportFilename() {
    const host = location.hostname || "retro-page";
    const title = document.title || host;
    return `${host}-${title}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "retrofy-page";
  }
})();
