 var WorkflowDesignerConstants = {
  ActivityColor: "#ECF0F1",
  ActivityTextColor: "#2D3436",
  ActivityInitialColor: "#27AE60",
  ActivityInitialTextColor: "#FFFFFF",
  ActivityFinalColor: "#2980B9",
  ActivityFinalTextColor: "#FFFFFF",
  ActivityShape: "#CECECE",
  SelectColor: "#F39C12",
  SelectTextColor: "#FFFFFF",
  SelectSubProcessColor: "#e3b015",
  SelectSubProcessTextColor: "#FFFFFF",
  ButtonActive: "#D4D8D9",
  BarColor: "#EDF1F2",
  BarSeparatorColor: "#D9DEE0",
  DeleteConfirm: "Tem certeza de que deseja excluir o (s) item (ns) selecionado (s)?",
  DeleteConfirmCurrent: "Tem certeza de que deseja excluir este item?",
  FieldIsRequired: "Campo é obrigatório!",
  FieldMustBeUnique: "O campo deve ser único!",
  ButtonTextDelete: "Excluir",
  ButtonTextCreate: "Crio",
  ButtonTextSave: "Salve",
  ButtonTextYes: "Sim",
  ButtonTextNo: "Não",
  ButtonTextOk: "Ok",
  ButtonTextCancel: "Cancelar",
  ButtonTextClose: "Perto",
  ButtonTextUndo: "Desfazer",
  ButtonTextRedo: "Refazer",
  SaveConfirm: "Salvar alterações?",
  CloseWithoutSaving: "Fechar sem salvar?",
  TransitionAuto: "Auto",
  DialogConfirmText: "Questão",
  AlertTitle: "Warning",
  None: "Nenhum",
  Warning: "Aviso",
  SwitchToExpertMode: "Switch To Expert Mode",
  SwitchToDefaultMode: "Switch To Default Mode",
  InfoBlockLabel: {
    Activity: "Actividades:",
    Transition: "Transições:",
    Command: "Comandos:"
  },
  ActivityNamePrefix: "Atividade_",
  ActivityFormLabel: {
    Title: "Atividade",
    TitleForInline: "Activity Inline",
    Name: "Nome",
    State: "Estado",
    IsInitial: "Inicial",
    IsFinal: "Final",
    IsForSetState: "Para o estado definido",
    IsAutoSchemeUpdate: "Atualização do esquema automático",
    Implementation: "Implementação",
    PreExecutionImplementation: "Implementação de pré-execução",
    ImpOrder: "Ordem",
    ImpAction: "Açao",
    ImpActionParameter: "Parâmetro de ação",
    Annotations: "Annotations",
    AnnotationName: "Name",
    AnnotationValue: "Value",
    Scheme: "Inline scheme",
    AlwaysConditionShouldBeSingle: "Sempre condição deve ser único",
    OtherwiseConditionShouldBeSingle: "Caso contrário, a condição deve ser única"
  },
  TransitionFormLabel: {
    Title: "Transição",
    Name: "Nome",
    From: "Da atividade",
    To: "Para atividade",
    Classifier: "Classificador",
    Restrictions: "Restrições",
    RestrictionsType: "Tipo",
    RestrictionsActor: "Ator",
    Condition: "Condição",
    ConditionType: "Tipo",
    ConditionAction: "Açao",
    ResultOnPreExecution: "Resultado na pré-execução",
    Trigger: "Desencadear",
    TriggerType: "Tipo",
    TriggerAuto: "Auto",
    TriggerCommand: "Comando",
    TriggerTimer: "Cronômetro",
    ConditionActionParameter: "Parâmetro de ação",
    ConditionExpression: "Expression",
    ConditionInversion: "Inverta o resultado da ação",
    ConditionsConcatenationType: "Tipo de concatenação de condições",
    AllowConcatenationType: "Concat permitir como",
    RestrictConcatenationType: "Concat restringir como",
    IsFork: "É garfo",
    MergeViaSetState: "Mesclar subprocesso via estado definido",
    DisableParentStateControl: "Desativar controle de processo pai",
    ShowConcatParameters: "Mostrar concatenação",
    HideConcatParameters: "Ocultar concatenação",
    Annotations: "Annotations",
    AnnotationName: "Name",
    AnnotationValue: "Value",
    InlinedFinalActivityName: "Inlined Final Activity Name",
    Allow: "Allow",
    Restrict: "Restrict",
    ConditionsListShouldNotBeEmpty: "A lista de condições não deve estar vazia",
    AlwaysConditionShouldBeSingle: "Always condition should be single",
    OtherwiseConditionShouldBeSingle: "Otherwise condition should be single",
    ConditionalLabel: "Conditional",
    AlwaysLabel: "Always",
    ActionLabel: "Action",
    ExpressionLabel: "Expression",
    OtherwiseLabel: "Otherwise",
    Subprocess: "Subprocess",
    SubprocessNone: "None",
    SubprocessStart: "Start",
    SubprocessFinalize: "Finalize",
    SubprocessAuto: "Auto",
    SubprocessStartSettings: "Subprocess start settings",
    SubprocessFinalizeSettings: "Subprocess finalize settings",
    SubprocessName: "Subprocess name",
    SubprocessId: "Subprocess id",
    SubprocessIdPlaceholder: "Autogenerated GUID",
    SubprocessNamePlaceholder: "Same as transition name",
    SubprocessStartupType: "Subprocess startup type",
    SubprocessStartupTypeSameThread: "Same thread",
    SubprocessStartupTypeAnotherThread: "Another thread",
    SubprocessStartupTypeTimerQueue: "Timer queue",
    SubprocessStartupParameterCopyStrategy: "Parameters copy strategy",
    SubprocessStartupParameterCopyStrategyCopyAll: "Copy all",
    SubprocessStartupParameterCopyStrategyIgnoreAll: "Ignore all",
    SubprocessStartupParameterCopyStrategyCopySpecified: "Copy specified",
    SubprocessStartupParameterCopyStrategyIgnoreSpecified: "Ignore specified",
    SubprocessSpecifiedParameters: "Specified parameters",
    SubprocessFinalizeParameterMergeStrategy: "Parameters merge strategy",
    SubprocessFinalizeParameterMergeStrategyOverwriteAllNulls: "Overwrite all nulls",
    SubprocessFinalizeParameterMergeStrategyOverwriteAll: "Overwrite all",
    SubprocessFinalizeParameterMergeStrategyOverwriteSpecified: "Overwrite specified",
    SubprocessFinalizeParameterMergeStrategyDontOverwriteSpecified: "Don't overwrite specified"
  },
  LocalizationFormLabel: {
    Title: "Localização",
    ObjectName: "ObjectName",
    Type: "Tipo",
    IsDefault: "IsDefault",
    Culture: "Cultura",
    Value: "Valor",
    Types: [
      "Command",
      "State",
      "Parameter"
    ]
  },
  TimerFormLabel: {
    Title: "Temporizadores",
    Name: "Nome",
    Type: "Tipo",
    Value: "Valor",
    Types: [
      "Command",
      "State",
      "Parameter"
    ],
    OverrideHint: "Anule o temporizador se existir",
    Override: "Anule"
  },
  ParameterFormLabel: {
    Title: "Parâmetros",
    Name: "Nome",
    Type: "Tipo",
    Purpose: "Propósito",
    Value: "Valor",
    InitialValue: "Valor inicial",
    ShowSystemParameters: "Mostrar parâmetros do sistema"
  },
  ActorFormLabel: {
    Title: "Atores",
    Name: "Nome",
    Rule: "Regra",
    Value: "Valor"
  },
  CommandFormLabel: {
    Title: "Comando",
    Name: "Nome",
    InputParameters: "Parâmetros de entrada",
    InputParametersName: "Nome",
    InputParametersIsRequired: "Requeridos",
    InputParametersParameter: "Parâmetro",
    InputParametersDefaultValue: "Padrão"
  },
  CommandParametersFormLabel: {
    Title: "command parameters",
    InputParametersName: "Name",
    InputParametersIsRequired: "Required",
    InputParametersParameter: "Parameter",
    InputParametersDefaultValue: "Default"
  },
  ProcessInfoFormLabel: {
    Title: "Additional Parameters",
    IsObsolete: "IsObsolete",
    DefiningParameters: "Defining parameters",
    ProcessParameters: "Process parameters",
    SystemParametersTabName: "System Parameters",
    ProcessParametersTabName: "Process Parameters",
    HistoryTabName: "History",
    TimersTabName: "Timers",
    TagsTabName: "Tags",
    TagsInputPlaceholder: "Start entering a name to add a tag",
    HistoryTabFromLabel: "From",
    HistoryTabFromStateLabel: "From State",
    HistoryTabToLabel: "To",
    HistoryTabToStateLabel: "To State",
    HistoryTabExecutorIdLabel: "Executor Id",
    HistoryTabActorIdLabel: "Actor Id",
    HistoryTabTimeLabel: "Time",
    HistoryTabTriggerNameLabel: "Trigger Name",
    HistoryTabTransitionClassifierNameLabel: "",
    ParametersNameLabel: "Name",
    ParametersValueLabel: "Value",
    TimersTabNameLabel: "Name",
    TimersTabValueLabel: "Value",
    RootProcess: "Root Process",
    TagsLabel: "Tags (separated by commas)",
    GeneralTabLabel: "General",
    ProcessIdLabel: "Process Id"
  },
  DropdownValues: {
    Name: "Name",
    Value: "Value",
    Dropdown: "Dropdown",
    Values: "values"
  },
  CodeActionsFormLabel: {
    Title: "Ações de código",
    Name: "Nome",
    ActionCode: "Código de ação",
    IsGlobal: "É global",
    IsAsync: "Assíncrono",
    Type: "Tipo",
    GlobalDeleteMessage: "Se você excluir a Global CodeAction - <br/> <b> outros esquemas não poderão chamá-la!",
    UnGlobalMessage: "Você alterou o estado do sinalizador global. <br/> Será criada uma Ação de Código Local com base nesta Ação Global de Código após salvar este esquema.",
    EditParameters: "Edit parameters",
    Parameters: "Parameters",
    Text: "Text",
    TextArea: "TextArea",
    Number: "Number",
    Checkbox: "Checkbox",
    Dropdown: "Dropdown",
    MultiSelect: "MultiSelect",
    DateTime: "Date/Time",
    Values: "Values",
    DropdownName: "Name",
    DropdownValue: "Value",
    DropdownShouldContainValues: "Dropdown should contain values",
    IsRequired: "Required",
    DefaultValue: "Default value",
    Json: "Json",
    TitleField: "Title"
  },
  EditParametersFormlabel: {
    Title: "Edit parameter values",
    NumberRequired: "Should be a numeric value",
    DateShouldBeInISOFormat: "Date/Time parameter should be in ISO8601 format",
    SwitchToJson: "Switch to JSON editor",
    SwitchToConstructor: "Switch to parameter values editor",
    InvalidJson: "JSON object is invalid or does not match the model"
  },
  ToolbarLabel: {
    CreateActivity: "Criar atividade",
    CreateInline: "Create inline (template)",
    CopySelected: "Copiar selecionado",
    Undo: "Desfazer",
    Redo: "Refazer",
    Move: "Mover",
    ZoomIn: "Mais Zoom",
    ZoomOut: "Reduzir o zoom",
    ZoomPositionDefault: "Padrão de zoom",
    FullScreen: "Tela cheia",
    Refresh: "Atualizar",
    AutoArrangement: "Auto arranjo",
    Actors: "Atores",
    Commands: "Comandos",
    Parameters: "Parâmetros",
    Localization: "Localização",
    Timers: "Temporizadores",
    AdditionalParameters: "Parâmetros Adicionais",
    CodeActions: "Ações de código",
    Info: "Informação ampliada",
    Delete: "Excluir",
    Clone: "Clone",
    Settings: "Definições",
    CreateTransition: "Crie uma transição",
    CreateActivityTransition: "Crie uma atividade e uma transição",
    Legend: "lenda",
    ProcessInfo: "Process Info",
    Inline: "The scheme can be inlined",
    Elements: "Elements",
    Library: "Library",
    ResetSettings: "Reset settings"
  },
  LibraryLabel: {
    PluginRequired: "Plugin required:"
  },
  ErrorActivityIsInitialCountText: "Um elemento deve ser marcado como inicial",
  ErrorActivityIsFinalCountText: "This scheme is Inlined. One or more elements must be marked flag Final",
  ErrorReadOnlySaveText: "O Designer no modo ReadOnly, você não pode salvá-lo.",
  ErrorInvalidObjectsSaveText: "Can't save the schema. Those objects are in invalid state",
  BrokenReferencesDialogText: "This schema contains references to Actions, Conditions or Rules that aren't defined by this schema or current action providers. Do you want to keep them?",
  EditCodeSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditCodeLabel: {
    Title: "Editar código",
    EditCodeButton: "Editar código",
    Usings: "Usos",
    Compile: "Compilar",
    CompileSucceeded: "Compilação bem sucedida.",
    Success: "Sucesso",
    Error: "Erro",
    OK: "Está bem",
    ShowUsings: "Mostrar utilizações",
    HideUsings: "Esconder usings"
  },
  EditJSONLabel: {
    Title: "Editar valor em JSON",
    CreateEmptyType: "Crio",
    Format: "Formato"
  },
  EditExpressionSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditExpressionLabel: {
    Title: "Edit expression",
    Validate: "Validate",
    Succeeded: "Expression is valid.",
    Success: "Success",
    Error: "Error",
    OK: "OK"
  },
  Elements: {
    Header: "Elements",
    BasicActivity: "Basic Activity",
    BasicActivityDesc: "It determines a state and the order, in which Actions are executed in your process.",
    InlineHeader: "Inline",
    InitialActivity: "Initial Activity",
    InitialActivityDesc: "It a initial state.",
    FinalActivity: "Final Activity",
    FinalActivityDesc: "It a final state."
  },
  OverviewMap: {
    show: true,
    width: 300,
    height: 150
  },
  UndoDepth: 200,
  DefaultCulture: "pt-BR",
  ErrorInBrowserConsole: "See more info in the browser console.",
  EditJSONSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 480
  }
};