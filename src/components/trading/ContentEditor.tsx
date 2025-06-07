import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Edit3, Save, Plus, Trash2 } from "lucide-react";
import { TradingConfig, PayoutRecord } from "@/lib/trading-config";

interface ContentEditorProps {
  config: TradingConfig;
  onUpdate: (config: TradingConfig) => void;
}

export const ContentEditor = ({ config, onUpdate }: ContentEditorProps) => {
  const [editableConfig, setEditableConfig] = useState<TradingConfig>(config);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    onUpdate(editableConfig);
    setIsOpen(false);
  };

  const addPayoutRecord = () => {
    const newRecord: PayoutRecord = {
      id: Date.now().toString(),
      amount: "$0.00",
      trader: "New Trader",
      country: "Country",
      flag: "🌍",
    };
    setEditableConfig((prev) => ({
      ...prev,
      payoutRecords: [...prev.payoutRecords, newRecord],
    }));
  };

  const updatePayoutRecord = (
    index: number,
    field: keyof PayoutRecord,
    value: string,
  ) => {
    setEditableConfig((prev) => ({
      ...prev,
      payoutRecords: prev.payoutRecords.map((record, i) =>
        i === index ? { ...record, [field]: value } : record,
      ),
    }));
  };

  const deletePayoutRecord = (index: number) => {
    setEditableConfig((prev) => ({
      ...prev,
      payoutRecords: prev.payoutRecords.filter((_, i) => i !== index),
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
          size="lg"
        >
          <Edit3 className="h-5 w-5 mr-2" />
          Edit Content
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Edit Trading Platform Content
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="payouts">Payout Options</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="records">Records</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="hero-title">Hero Title</Label>
                <Input
                  id="hero-title"
                  value={editableConfig.hero.title}
                  onChange={(e) =>
                    setEditableConfig((prev) => ({
                      ...prev,
                      hero: { ...prev.hero, title: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                <Textarea
                  id="hero-subtitle"
                  value={editableConfig.hero.subtitle}
                  onChange={(e) =>
                    setEditableConfig((prev) => ({
                      ...prev,
                      hero: { ...prev.hero, subtitle: e.target.value },
                    }))
                  }
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-4">
            <div className="space-y-4">
              {editableConfig.testimonials.map((testimonial, index) => (
                <Card key={testimonial.id} className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Amount</Label>
                      <Input
                        value={testimonial.amount || ""}
                        onChange={(e) =>
                          setEditableConfig((prev) => ({
                            ...prev,
                            testimonials: prev.testimonials.map((t, i) =>
                              i === index
                                ? { ...t, amount: e.target.value }
                                : t,
                            ),
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label>Title</Label>
                      <Input
                        value={testimonial.title || ""}
                        onChange={(e) =>
                          setEditableConfig((prev) => ({
                            ...prev,
                            testimonials: prev.testimonials.map((t, i) =>
                              i === index ? { ...t, title: e.target.value } : t,
                            ),
                          }))
                        }
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payouts" className="space-y-4">
            <div>
              <Label htmlFor="payout-title">Section Title</Label>
              <Input
                id="payout-title"
                value={editableConfig.payoutOptions.title}
                onChange={(e) =>
                  setEditableConfig((prev) => ({
                    ...prev,
                    payoutOptions: {
                      ...prev.payoutOptions,
                      title: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="space-y-4">
              {editableConfig.payoutOptions.options.map((option, index) => (
                <Card key={option.id} className="p-4">
                  <div className="space-y-4">
                    <div>
                      <Label>Title</Label>
                      <Input
                        value={option.title}
                        onChange={(e) =>
                          setEditableConfig((prev) => ({
                            ...prev,
                            payoutOptions: {
                              ...prev.payoutOptions,
                              options: prev.payoutOptions.options.map((o, i) =>
                                i === index
                                  ? { ...o, title: e.target.value }
                                  : o,
                              ),
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={option.description}
                        onChange={(e) =>
                          setEditableConfig((prev) => ({
                            ...prev,
                            payoutOptions: {
                              ...prev.payoutOptions,
                              options: prev.payoutOptions.options.map((o, i) =>
                                i === index
                                  ? { ...o, description: e.target.value }
                                  : o,
                              ),
                            },
                          }))
                        }
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Payout Frequency</Label>
                <Input
                  value={editableConfig.stats.payoutFrequency}
                  onChange={(e) =>
                    setEditableConfig((prev) => ({
                      ...prev,
                      stats: { ...prev.stats, payoutFrequency: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <Label>Avg Response Time</Label>
                <Input
                  value={editableConfig.stats.avgResponseTime}
                  onChange={(e) =>
                    setEditableConfig((prev) => ({
                      ...prev,
                      stats: { ...prev.stats, avgResponseTime: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <Label>Customer Support</Label>
                <Input
                  value={editableConfig.stats.customerSupport}
                  onChange={(e) =>
                    setEditableConfig((prev) => ({
                      ...prev,
                      stats: { ...prev.stats, customerSupport: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <Label>Total Paid Out</Label>
                <Input
                  value={editableConfig.stats.totalPaidOut}
                  onChange={(e) =>
                    setEditableConfig((prev) => ({
                      ...prev,
                      stats: { ...prev.stats, totalPaidOut: e.target.value },
                    }))
                  }
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="records" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Payout Records</h3>
              <Button onClick={addPayoutRecord} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Record
              </Button>
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {editableConfig.payoutRecords.map((record, index) => (
                <Card key={record.id} className="p-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div>
                      <Label>Amount</Label>
                      <Input
                        value={record.amount}
                        onChange={(e) =>
                          updatePayoutRecord(index, "amount", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label>Trader</Label>
                      <Input
                        value={record.trader}
                        onChange={(e) =>
                          updatePayoutRecord(index, "trader", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label>Country</Label>
                      <Input
                        value={record.country}
                        onChange={(e) =>
                          updatePayoutRecord(index, "country", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="flex-1">
                        <Label>Flag</Label>
                        <Input
                          value={record.flag}
                          onChange={(e) =>
                            updatePayoutRecord(index, "flag", e.target.value)
                          }
                        />
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deletePayoutRecord(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-4 pt-4 border-t">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
